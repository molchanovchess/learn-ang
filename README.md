## 1. counter Component
Used different ways of binding in Angular. Interpolation and event binding.

## 2. wish-message Component
Used event binding to change wish message.

## 3. product-item Component
Created one product item. We can change the amount of products pushing '-' and '+' that also counts total value price * amount.

## 4. shopping-cart Component
Used built-in structural directive *ngFor to loop the array of product items.

## 5. change-username Component
Created Input form. Binded input data with text field using our own function updateInput().

## 6. change-username-auto Component
Used ngModel attribute directive for two-way binding.

## 7. sms Component
Component contains textarea to write a message. Used two-way binding to bind textarea with message variable.

## 8. show-password Component
Used attribute binding to switch iput type between "text" and "password".

## 9. amount-range Component
Used input type "range" to set up the price.

## 10. theme Component
Used input type "checkbox" role "switch" to switch to Dark theme and back. We change the theme with changing classes using class binding

## 11. user-register Component
Created a registration form. 

interface User{
  name : string;
  email : string;
  password : string;
  designation : string;
  bio : string;
  terms : boolean;
}

print to the console a new Object with Interface User from the filled registration form.

## 12. auth-user Component
Depending on isLoggedIn boolean we show 'Thank you' and Login Button or 'Welcome Alex' and Logout button. Used ngIf directive.

## 13. shopping-cart-modified Component
Comparing with shopping-cart Component, now we receive product item data from product Component.

## 14. pipes Component
Used
- uppercase
- titlecase
- number
- date
- currency
- json

 pipes to display data the way we want

## 15. user-list Component
Created user service to get data from API (jsonplaceholder). Used subscribe method to receive data from Service to Component.
