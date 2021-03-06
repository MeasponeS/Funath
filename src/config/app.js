const devApiUrl = 'https://funath.klsfood.cn/';

//正式环境变量,注意修改
const proApiUrl = 'https://funath.klsfood.cn/';

const nodeDevEnv = process.env.NODE_ENV=='development' ? true : false;

export default {
    nodeDevEnv:nodeDevEnv,
    apiUrl : nodeDevEnv ? devApiUrl : proApiUrl,
    apiPrefix : "",
    timeout:5000,
    cookiesExpires:7,
    requestRetry:4,
    requestRetryDelay:800,
}
