#!/bin/bash

# 현재 변경 사항 확인
git status

# 변경 사항 추가
git add .

# 커밋 메시지 입력 받기
echo "커밋 메시지를 입력하세요 (엔터키를 누르면 현재 시간으로 자동 설정됩니다):"
read message

if [ -z "$message" ]; then
  message="Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# 커밋 수행
git commit -m "$message"

# 푸시 수행
echo "GitHub로 푸시 중..."
git push origin main

echo "완료되었습니다!"
