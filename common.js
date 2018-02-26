function helloWorld() {

    let data = {
        amount: document.getElementById('input-amount').value,
        address: document.getElementById('input-address').value,
        name: document.getElementById('input-name').value,
        phone: document.getElementById('input-phone').value,
    };

    this.addOrder(data).then((response) => {
        console.log(response)
    }).catch((ExtendedError) => {
        console.log(ExtendedError.message)
    });
}