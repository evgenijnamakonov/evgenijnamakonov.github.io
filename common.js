function saveOrder() {

    /**
     * Например на форме заказа есть поля с кол-вом товара, адрессом доставки,
     * Именем клиента и его телефоном
     * Тогда по клику на кнопку "Отправить" вызовется метод saveOrder()
     * Он в свою очередь соберет из текстовых полей введенные занчения и
     * Положит их в объект data.
     * @type {{amount, address, name, phone}}
     */
    let data = {
        amount: document.getElementById('input-amount').value,
        address: document.getElementById('input-address').value,
        name: document.getElementById('input-name').value,
        phone: document.getElementById('input-phone').value,
        product: document.getElementById('input-product').value,
    };

    /**
     * Затем создатся экземпляр класса MyMobileCrm
     * и у этого экземпляра вызовется метод addOrder() в который и передадим data. И запись добавится в firebase
     * @type {MyMobileCrm}
     */
    let CRM = new MyMobileCrm();

    CRM.addOrder(data).then((response) => {
        console.log(response)
    }).catch((ExtendedError) => {
        console.log(ExtendedError.message)
    });
}

function saveUser() {

    /**
     * Метод создаст в базе запись о новом пользователе
     * @type {{amount, address, name, phone}}
     */
    let data = {
        firstName: document.getElementById('input-firstName').value,
        lastName: document.getElementById('input-lastName').value,
        phone: document.getElementById('input-phone').value,
        email: document.getElementById('input-email').value,
    };

    /**
     * @type {MyMobileCrm}
     */
    let CRM = new MyMobileCrm();

    CRM.addUser(data).then((response) => {
        console.log(response);
        location="https://evgenijnamakonov.github.io/order.html";
    }).catch((ExtendedError) => {
        console.log(ExtendedError.message)
    });
}