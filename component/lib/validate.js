export function login_validate(values) {
    const errors = {};

    //emailのvalidation
    if (!values.email) {
        errors.email = '';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '無効なメールアドレスです。';
    }

    //passwordのvalidation
    if (!values.password) {
        errors.password = '';
    } else if (values.password.length < 8 || values.password.lenggh > 20) {
        errors.password = 'パスワードは8文字以上20文字以下にして下さい。';
    } else if (values.password.includes(" ")){
        errors.password = '空白はパスワードに含められません。'
    }

    return errors;
}

export function register_validate(values) {
    const errors = {};

    //usernameのvalidation
    if (!values.username) {
        errors.username = '';
    } else if (values.username.includes(" ")) {
        errors.username = '空白は入れずに入力して下さい。';
    } else if (values.username.includes("　")) {
        errors.username = '空白は入れずに入力して下さい。';
    }

    //emailのvalidation
    if (!values.email) {
        errors.email = '';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = '無効なメールアドレスです。';
    }

    //passwordのvalidation
    if (!values.password) {
        errors.password = '';
    } else if (values.password.length < 8 || values.password.lenggh > 20) {
        errors.password = 'パスワードは8文字以上20文字以下にして下さい。';
    } else if (values.password.includes(" ")){
        errors.password = '空白はパスワードに含められません。'
    }

    //cpasswordのvalidation
    if (!values.cpassword) {
        errors.cpassword = '';
    } else if (values.password !== values.cpassword) {
        errors.cpassword = 'パスワードと同じ文字列を入力して下さい。';
    } else if (values.cpassword.includes(" ")){
        errors.cpassword = '空白はパスワードに含められません。'
    }

    return errors;
}