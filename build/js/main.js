"use strict";

window.addEventListener('scroll', function () {
  console.log('Текущая прокрутка сверху: ' + window.pageYOffset);

  if (window.pageYOffset > 60) {
    document.body.classList.add('fixed-header');
  } else {
    document.body.classList.remove('fixed-header');
  }
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFJO0FBQ2xDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSwrQkFBK0JILE1BQU0sQ0FBQ0ksV0FBbkQ7O0FBQ0EsTUFBSUosTUFBTSxDQUFDSSxXQUFQLEdBQXFCLEVBQXpCLEVBQTRCO0FBQ3hCQyxJQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsY0FBNUI7QUFDSCxHQUZELE1BRUs7QUFDREgsSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLGNBQS9CO0FBQ0g7QUFDSixDQVBEO0FDQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKT0+e1xuICAgIGNvbnNvbGUubG9nKCAn0KLQtdC60YPRidCw0Y8g0L/RgNC+0LrRgNGD0YLQutCwINGB0LLQtdGA0YXRgzogJyArIHdpbmRvdy5wYWdlWU9mZnNldCApO1xuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiA2MCl7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZml4ZWQtaGVhZGVyJyk7XG4gICAgfWVsc2V7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQtaGVhZGVyJyk7XG4gICAgfVxufSlcbiIsIiJdfQ==
