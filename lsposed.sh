#!/bin/bash
 
FTP_SERVER="154.204.57.99"
FTP_USER="bk"
FTP_PASS="We3gPvyP"
FTP_PORT="21" # SFTP端口号
 
#上传和下载的本地文件路径和远程文件路径
LOCAL_FILE_PATH=" /data/app/com.aefyr.sai-X-Jpp-ap8wqiSAv10D_Rwg==/base.apk"
REMOTE_FILE_PATH="/test/base.apk"
 
 
 
function upload_file() {
sftp -P $FTP_PORT $FTP_USER@$FTP_SERVER <<EOF
cd $(dirname $REMOTE_FILE_PATH)
put $LOCAL_FILE_PATH $(basename $REMOTE_FILE_PATH)
bye
EOF
}
 
function upload_file1() {
sftp -P $FTP_PORT $FTP_USER@$FTP_SERVER <<EOF
cd $(dirname $3)
put $2 $(basename $3)
bye
EOF
}
 
 
function download_file() {
sftp -P $FTP_PORT $FTP_USER@$FTP_SERVER <<EOF
cd $(dirname $REMOTE_FILE_PATH)
get $(basename $REMOTE_FILE_PATH) $LOCAL_FILE_PATH
bye
EOF
}
 
 
#sftp
#执行上传文件操作 ./ftp.sh upload
if [[ $1 == "upload" ]]; then 
	echo "upload start"
	upload_file
	echo "upload end"
 
 
 
#执行下载文件操作 ./ftp.sh download
elif [[ $1 == "download" ]]; then 
	echo "download_file"
	download_file
 
 
 
 
 
#自定义参数 ./ftp.sh upload1 /home/ali/test/test2.txt /test/test2.txt
elif [[ $1 == "upload1" ]]; then 
	echo "upload1 start"
	upload_file1
	echo "upload end"
 
 
# 如果命令行参数不正确，则提示使用方法
else 
	echo "Usage: $0 [upload|download|upload]"
fi
 
 
#结束脚本
exit 0
 
 
#./ftp.sh upload
#./ftp.sh download
#./ftp.sh upload1 /home/ali/test/test2.txt /test/test2.txt
 
 
 
 
 
 
