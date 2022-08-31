#!/usr/bin/env python
# -*- coding: utf-8 -*-

# えきから時刻表から時刻表リストを作るやつ

# 必要そうなのをインポートする
import sys
import re
import urllib2
import chardet



if __name__ == "__main__":

  # リストを作る元ネタURLを入れてくれ コマンドラインからのほうがいいか？
  url = sys.argv[1]
  #url = 'http://www.ekikara.jp/newdata/ekijikoku/0101013/down1_01102011.htm'

  # URLあけるべ
  rawhtmltext = urllib2.urlopen(url).read()

  # 文字コード推測 いや、決まったサイトからだから文字コード固定だろうけどさ
  #guess = chardet.detect(rawhtmltext)

  # 推測文字コードからのunicode化
  #unicode_text = rawhtmltext.decode(guess['encoding'])
  unicode_text = rawhtmltext.decode('shift-jis')

  # 行で区切るべさ
  lines = unicode_text.split('\n');

  # データ格納庫の2次元配列を初期化しよう
  timetable =[]


  # まず時刻表リストをつくるにあたり行ごとに作業すっぞ
  for line in lines:

    # ストリップする 改行コードイラネ
    line = line.rstrip('rn')

    #  時のパターンがある行か判別しちゃう
    hourpattern  = re.compile(u"<td align=\"center\" class=\"lowBg06\"><span class=\"l\"><span class=\"textBold\">(\d{1,2})</span></span></td>")
    hourmatch    = re.search( hourpattern , line )
    
    #  分のパターンがある行か判別しちゃう
    minutepattern = re.compile(u"<span style=\"color:#[0-9a-zA-Z]{6};\"><span class=\"s\">(.*)</span><br/><span class=\"ll\"><span class=\"textBold\"><a href=\"../../detail/.*/.*\.htm\">(\d{2})</a></span></span></span>")
    minutematch   = re.search( minutepattern , line )
    
    # 時のパターンの行なら
    if( hourmatch ):

      # ここまででhourmatch.group(1) に時の数字が入ってるので何か変数に入れよう
      currenthour = hourmatch.group(1)
      continue

    # 分のパターンの行なら
    elif( minutematch ):

      # ここまでで minutematch.group(1) に行き先の略称([*]があれば種別)、 minutematch.group(2) に分が入る
      # 例えば print "%02s:%02s %s" % ( currenthour , minutematch.group(2) , minutematch.group(1) ) とすれば出力はできよう(group(1)のほうから逆算できるけど行き先と種別はまだ無整形)
      
      # このパターンか？
      typedirpattern = re.compile(u"(\[.*\])(.*)")
      typedirmatch   = re.search( typedirpattern , minutematch.group(1) )

      # カクカッコありパターン
      if( typedirmatch ):

        # 種別は後で上手く処理するのでとりあえず今の文字列を仕込んでおこう
        currenttype = minutematch.group(1)

        # 行き先は[]の区画を削ってあげよう
        currentdirection = typedirmatch.group(2)

      # カクカッコなしパターン
      else:
        currenttype      = u"普通"
        currentdirection =  minutematch.group(1)

      # テーブルに追加
      timetable.append( {  "type":currenttype, "time":("%02d:%02s" % ( int(currenthour) , minutematch.group(2) ) ) , "direction":currentdirection } )
      continue


    # 車種のパターンがある行かな判別しちゃう 1:種別略称 2:車種名正式名称
    typepattern  = re.compile(u"<span style=\"color:#[0-9a-zA-Z]{6};\">\[(.*)\]…(\[.*\].*)</span>")
    typematch    = re.search( typepattern , line )

    # 車種のパターンの行なら
    if( typematch ):

      # 今まで作ってきたtimetableの中のtypeを見なおす時間だな
      for i, onetime in enumerate(timetable):

        # おい、貴様らの中でこの種別を持つ奴はいるか？
        typepattern_sub = re.compile(u"\[" + typematch.group(1) + u"\]")
        typematch_sub   = re.search( typepattern_sub , timetable[i]["type"] )
        
        # は、はい、小生であります！
        if( typematch_sub ):

          # 貴様か～、おつむを取り替えてやる！うああ！
          subpattern = re.compile(u"\[(.*)\]")                      # 特急 みたいな表記の場合
          submatch   = re.search( subpattern , typematch.group(2) ) # 特急 みたいな表記の場合
          timetable[i]["type"] = submatch.group(1)                  # 特急 みたいな表記の場合
          # EX1 : timetable[i]["type"] = typematch.group(2) # [特急]スーパーとかち みたいな表記の場合
          # EX2 : subpattern = re.compile(u"\[(.*)\]")                      # 特急 みたいな表記の場合
          # EX2 : submatch   = re.search( subpattern , typematch.group(2) ) # 特急 みたいな表記の場合
          # EX2 : timetable[i]["type"] = submatch.group(1)                  # 特急 みたいな表記の場合

      #
      continue

    # 行先のパターンがある行かな判別しちゃう 1:種別略称 2:車種名正式名称
    direcitonpattern  = re.compile(u".*\s{54}(.*)…(.*)")
    direcitonmatch    = re.search( direcitonpattern , line )

    # 行先のパターンの行なら
    if( direcitonmatch ):

      # 今まで作ってきたtimetableの中のtypeを見なおす時間だな
      for i, onetime in enumerate(timetable):

        # 変えてやるー（棒読み
        if( onetime["direction"].strip() == direcitonmatch.group(1).strip() ):
          timetable[i]["direction"] = direcitonmatch.group(2).rstrip()

      #
      continue

  # 最終出力
  for i, onetime in enumerate(timetable):
    print ('nexttrain[%d]=["%s","%s","%s"];') % ( i , onetime["type"] , onetime["time"] , onetime["direction"] )
    # EX : print ('nexttrain[%d]=["%s","%s","%s"];') % ( i , onetime["type"] , onetime["time"] , onetime["direction"] )


# 以下メモ

# <td align="center" class="lowBg06"><span class="l"><span class="textBold">時半角数字一桁も二桁も有り</span></span></td>

# <span style="color:#000000;"><span class="s">行き先</span><br/><span class="ll"><span class="textBold"><a href="../../detail/nnnnnnn/nnnnn.htm">時刻半角数字二桁</a></span></span></span>


# <td valign="top" class="tdWid02" nowrap><span class="m">車種</span></td>
# ごにょごにょ
# *** <span style="color:#******;">無…[普通]</span>
# *** <span style="color:#******;">[特オ]…[特急]オホーツク</span>
# 無…の行は気にしなくてもいいよね

# <td valign="top" class="tdWid02" nowrap><span class="m">行先</span></td>
# ごにょごにょ
# *** 新…新さっぽろ
# *** 何新…何新さっぽろ

