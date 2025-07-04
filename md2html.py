import markdown

def convert_md_to_html(md_file_path, html_file_path):
    """
    将Markdown文件转换为HTML文件。

    :param md_file_path: Markdown文件的路径
    :param html_file_path: 输出HTML文件的路径
    """
    # 读取Markdown文件内容
    with open(md_file_path, 'r', encoding='utf-8') as file:
        md_content = file.read()

    # 将Markdown内容转换为HTML
    html_content = markdown.markdown(md_content)

    # 将HTML内容写入文件
    with open(html_file_path, 'w', encoding='utf-8') as file:
        file.write(html_content)

# 使用示例
file = 'experience'
md_file = './md/'+ file+'.md'  # 你的Markdown文件路径
html_file = './md2html/'+ file+'.html'  # 输出的HTML文件路径
convert_md_to_html(md_file, html_file)
print('Done!')
