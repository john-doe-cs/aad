Module Creation:


angular.module('myApp', [])
The angular.module function is used to create a new AngularJS module named 'myApp'.
The first argument is the name of the module, and the second argument (an empty array []) specifies any dependencies the module may have. In this case, there are no dependencies.
HomeController:

 
 
.controller('HomeController', function($scope) {
    $scope.message = "Explore our amazing products!";
})
Here, we define a controller named 'HomeController' using the module.controller function.
The controller function takes two parameters: the name of the controller ('HomeController') and a function that defines the controller's behavior.
Inside the controller function, we inject the $scope service, which is an object that serves as the context for the HTML view.
We set a property named message on the $scope object. This property will be accessible in the HTML view associated with this controller.
ProductController:

 
 
.controller('ProductController', function($scope) {
    $scope.products = [
        { name: 'Laptop', price: 999 },
        { name: 'Smartphone', price: 599 },
        { name: 'Tablet', price: 399 }
    ];
});
Similar to 'HomeController', we define another controller named 'ProductController'.
Inside the controller function, we inject the $scope service.
We define a property named products on the $scope object, which holds an array of product objects.
HTML Usage:

html
 
<div ng-controller="HomeController">
    <h1>Welcome to our website</h1>
    <p>{{ message }}</p>
</div>
In the HTML, we declare the ng-controller directive to associate the 'HomeController' with a <div> element.
Inside this <div>, we can access the message property defined in the 'HomeController' using the double curly braces {{ }}.
html
 
<div ng-controller="ProductController">
    <h2>Our Products</h2>
    <ul>
        <li ng-repeat="product in products">{{ product.name }} - {{ product.price }}</li>
    </ul>
</div>
Similarly, we use the ng-controller directive to associate the 'ProductController' with another <div> element.
Inside this <div>, we use the ng-repeat directive to iterate over the products array defined in the 'ProductController' and display each product's name and price.