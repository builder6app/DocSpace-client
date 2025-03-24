npx rimraf client 
npx copyfiles -u 5 "../../packages/client/dist/**/*" client
npx copyfiles -u 3 ../../public/**/* client/static
npx copyfiles config.json client/static/scripts

# # 要搜索的目录（请根据需要进行修改）
# DIRECTORY="dist"

# # 查找并替换函数
# replace_statics() {
#     # 找到所有目标文件
#     find "$DIRECTORY" -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" \) | while read -r file
#     do
#         # 使用 sed 命令替换文件内容
#         sed -i '' -e 's#/static/#/docs/static/#g' "$file"
#         sed -i '' -e 's#/locales/#/docs/locales/#g' "$file"
#         echo "Replaced in: $file"
#     done
    
#     sed -i '' -e 's#"static/#"docs/static/#g' "dist/index.html"

# }

# # 调用替换函数
# replace_statics