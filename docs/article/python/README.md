# [原创]Python爬取全屏手机壁纸图
使用方法，运行后可选输入类别，默认爬取全部，未做分类

``` python
#!/usr/local/bin/python3.6
# -*- coding: UTF-8 -*-

import requests
import urllib.request
from bs4 import BeautifulSoup
import os
from urllib.request import urlretrieve, quote
import time

headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
  'Referer': 'http://bizhi.bcoderss.com/'
}

def download (src, current) :
  srcstr = src.get('src')
  fileInfo = os.path.splitext(srcstr.split('/')[-1])
  filename = fileInfo[0]
  suffix = fileInfo[1]
  downPath = './photo/' + filename + suffix
  quoteName = quote(srcstr).replace('%3A', ':')
  if (not os.path.exists(downPath)) :
    try:
      print('正在爬取 第【' + str(current) + '】页 === > : ' + filename + suffix)
      urlretrieve(quoteName, downPath)
    except:
      print('未能爬取 === > : ' + quoteName)
      txt = open('error.txt', 'a', True, 'utf-8')
      txt.write(srcstr + '\n')

def getImg (current, tag, startTime) :
  print('开始爬取第【%d】页' % current)
  url = ''
  if tag:
    # url = 'http://bizhi.bcoderss.com/tag/' + tag + '/page/' + str(current)
    url = 'http://bizhi.bcoderss.com/page/' +str(current) + '/?s=' + tag
  else:
    url = 'http://bizhi.bcoderss.com/page/' + str(current)
  html = requests.get(url = url, headers = headers)
  if html.status_code == 200:
    soup = BeautifulSoup(html.text,'lxml')
    li = soup.select('.wallpaper li')
    for lidata in li:
      href = lidata.a.get('href')
      detail = requests.get(href, headers = headers)
      dsoup = BeautifulSoup(detail.text,'lxml')
      img = dsoup.select('.single-wallpaper>img')[0]
      download(img, current)
    print('第【' + str(current) + '】页 === > 爬取完成')
    current += 1
    getImg(current, tag, startTime)
  elif html.status_code == 404:
    print('目标返回404: === > ' + url)
    endTime = int(time.time())
    print('总共耗时: === >  ' + str(endTime - startTime) + ' S')
  else:
    print(' ################# 所有资源爬行完毕 ################# ')
    endTime = int(time.time())
    print('总共耗时: === >  ' + str(endTime - startTime) + ' S')

if __name__ == '__main__':
  tag = input('请输入tag, 否则默认爬取所有页面: ')
  startTime = int(time.time())
  getImg(1, tag, startTime)
```