var BooksCtrl = function($scope){
  $scope.books = [];
  
  $scope.addBook = function(){
    $scope.books.push($scope.newBook);
    $scope.newBook = {};
  };
};