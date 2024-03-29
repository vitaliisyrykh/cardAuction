const constants = {
    baseUrl:'localhost',
    host:3000,
    signUpPath: '/auth/sign-up',
    signInPath: '/auth/sign-in',
    refreshToken: 'refreshToken',
    emailRegular: /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/,
    adminRole: 'admin'
}
export default constants;