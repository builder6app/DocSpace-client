import path from 'path';

/**
 * 获取 @builder6/docs-client 的 dist 文件夹路径
 * @returns {string} dist 文件夹的完整路径
 * @throws {Error} 当路径无法解析时抛出错误
 */
export const getDocsClient = () => {
  try {
    // 解析 @builder6/docs-client 模块的路径
    const docsClientPath = path.dirname(require.resolve('@builder6/docs-client/package.json'));
    const docsClientDistPath = path.join(docsClientPath, 'dist');
    return docsClientDistPath;
  } catch (error) {
    throw new Error('无法解析 @builder6/docs-client 模块: ' + error.message);
  }
};