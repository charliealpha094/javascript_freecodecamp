// Done by Carlos Amaral (2021/06/07)


function checkScope() {
    let i = "function scope";

    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
