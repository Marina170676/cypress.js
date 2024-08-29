describe('Проверка авторизации', function(){

    it('Верный пароль и верный логин', function (){
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю цвет кнопки восстановить ппроль
        
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click();//нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверяю что полсе авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Есть крестик и он виден для пользователя

    })
})

it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю цвет кнопки восстановить ппроль
        
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio8'); //Ввели неверный пароль
        cy.get('#loginButton').click();//нажал войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверяю что полсе авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть креcтик и он виден для пользователя
         })

         it('верный пароль и неверный логин', function () {
            cy.visit('https://login.qa.studio/');  //Зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю цвет кнопки восстановить ппроль
            
            cy.get('#mail').type('german@dolnikovaaa.ru'); //Ввели неверный логин
            cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
            cy.get('#loginButton').click();//нажал войти
            
            cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверяю что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть креcтик и он виден для пользователя
             })
        

             it('Негативный кейс валидации логин без@', function () {
                cy.visit('https://login.qa.studio/');  //Зашли на сайт
                cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю цвет кнопки восстановить ппроль
                
                cy.get('#mail').type('germandolnikov.ru'); //Ввели неверный логин, без @
                cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
                cy.get('#loginButton').click();//нажал войти
                
                cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// Проверяю что после авторизации вижу текст
                cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть креcтик и он виден для пользователя
                 })


                 it('Верный пароль и верный логин  но с  большими буквами', function () {
                    cy.visit('https://login.qa.studio/');  //Зашли на сайт
                    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю цвет кнопки восстановить ппроль
                    
                    cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели верный логин с большими буквами
                    cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
                    cy.get('#loginButton').click();//нажал войти
                    
                    cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверяю что после авторизации вижу текст
                    cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть креcтик и он виден для пользователя
                     })



                     it('Проверка восстановления пароля', function () {
                        cy.visit('https://login.qa.studio/');  //Зашли на сайт
                        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');//Проверяю цвет кнопки восстановить ппроль
                        
                        cy.get('#forgotEmailButton').click();//нажимаю восстановить пароль  
                                              
                        cy.get('#mailForgot').type('german@dolnikov.ru');// ввел почту для восстановления
                        cy.get('#restoreEmailButton').click(); //Нажал отправить код                       

                        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// Проверяю что вижу текст  после отправки пароль на почту 
                        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
                        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Есть креcтик и он виден для пользователя
                         })
//Ввести правильный логин
//Ввести правильный пароль
//Нажать войти
//Проверить нужный текст и наличие кнопки крести


describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('tmarina@rambler.ru', { force: true });                   // вводим логин
         cy.get('input[type="password"]').type('Sonechka1706', { force: true });               // вводим пароль
         cy.get('button[type="submit"]').click({ force: true });                        // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
         cy.get('[href="/shop"]').click({ force: true });                               // нажимаем кнопку Магазин
         cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125', { force: true });                             // вводим CVV карты
         cy.get('.k_input_date').type('1225', { force: true });                           // вводим срок действия карты
         cy.get('.k_input_name').type('NAME', { force: true });                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click({ force: true });                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456', { force: true });                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click({ force: true });                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });

