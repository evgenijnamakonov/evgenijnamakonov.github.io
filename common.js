import MyMobileCrm from "./myCrm";

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
    };

    /**
     * Затем создатся экземпляр класса MyMobileCrm
     * и у этого экземпляра вызовется метод addOrder() в который и передадим data. И запись добавится в firebase
     * @type {MyMobileCrm}
     */
    let CRM = new MyMobileCrm();

    CRM.addOrder(data).then((response) => {
        alert(response)
    }).catch((ExtendedError) => {
        alert(ExtendedError.message)
    });
}

function saveUser() {

    /**
     * Метод создаст в базе запись о новом пользователе
     * @type {{amount, address, name, phone}}
     */
    let data = {
        amount: document.getElementById('input-amount').value,
        address: document.getElementById('input-address').value,
        name: document.getElementById('input-name').value,
        phone: document.getElementById('input-phone').value,
    };

    /**
     * @type {MyMobileCrm}
     */
    let CRM = new MyMobileCrm();

    CRM.addUser(data).then((response) => {
        alert(response);
        location="https://evgenijnamakonov.github.io/order.html";
    }).catch((ExtendedError) => {
        alert(ExtendedError.message)
    });
}