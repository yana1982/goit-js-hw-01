'use strict';
function getShippingMessage(country, price, deliveryFee) {console.log(`Shipping to ${country} will cost ${price * deliveryFee} credits`);}
getShippingMessage ("Australia", 120, 50);
getShippingMessage ("Germany", 80, 20);
getShippingMessage ("Sweden", 100, 20);