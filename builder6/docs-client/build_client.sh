echo "Remove client folder ..."
yarn rimraf dist 

echo "Build @docspace/client ..."
yarn workspace @docspace/client build

echo "Copy client statics ..."
yarn copyfiles -u 5 "../../packages/client/dist/**/*" dist

echo "Copy public statics ..."
yarn copyfiles -u 3 "../../public/**/*" dist/static

echo "Copy build6 statics ..."
yarn copyfiles -u 1 "public/**/*" dist/

echo "Replace statics ..."

# 查找并替换函数
replace_statics() {
    # 找到所有目标文件
    find "dist" -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" \) | while read -r file
    do
        # 使用 sed 命令替换文件内容
        sed -i '' -e 's#/logo.ashx#/docs/logo#g' "$file"
        sed -i '' -e 's#/manifest.json#/docs/manifest.json#g' "$file"
        # echo "Replaced in: $file"
    done
}

# 调用替换函数
replace_statics

echo "Done."