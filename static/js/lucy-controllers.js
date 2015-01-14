app.controller('likeVideoController', function($scope) {
  $scope.inputs =
      {}
  $scope.showInputs = false;
  $scope.showTheInputs = function() {
    console.log('sti');
    $scope.showInputs = true;
    $scope.$apply();
  }
  $scope.inputs.page = 0;
  $scope.checkLikeExists = function(cb) {
    $.ajax({
      url: 'likeVideo_checkLikeExists',
      type: 'post',
      contentType: "application/json; charset=utf-8",      
      data: JSON.stringify($scope.inputs)
    })
    .done(function(data) {
      $scope.result = JSON.parse(data);
      $scope.$apply();
      if (cb) cb($scope.result);
    })
    .fail(function(err) {
       console.log('Error loading data:' + JSON.stringify(err));
    })
  }
  $scope.like = function(cb) {
    $.ajax({
      url: 'likeVideo_like',
      type: 'post',
      contentType: "application/json; charset=utf-8",      
      data: JSON.stringify($scope.inputs)
    })
    .done(function(data) {
      $scope.result = JSON.parse(data);
      $scope.$apply();
      if (cb) cb($scope.result);
    })
    .fail(function(err) {
       console.log('Error loading data:' + JSON.stringify(err));
    })
  }
  $scope.unlike = function(cb) {
    $.ajax({
      url: 'likeVideo_unlike',
      type: 'post',
      contentType: "application/json; charset=utf-8",      
      data: JSON.stringify($scope.inputs)
    })
    .done(function(data) {
      $scope.result = JSON.parse(data);
      $scope.$apply();
      if (cb) cb($scope.result);
    })
    .fail(function(err) {
       console.log('Error loading data:' + JSON.stringify(err));
    })
  }
  
  $scope.getPages = function() {
    var page = $scope.inputs.page;
    var pages = [1, 2, 3, 4, 5];
    if (page < 3) {
      return [1, 2, 3, 4, 5];
    } else {
      return pages.map(function(d) { return d + page - 2 });
    }
  }
})

app.controller('videosAboutKalturaController', function($scope) {
  $scope.inputs =
      {"nameLike":"Kaltura"}
  $scope.showInputs = false;
  $scope.showTheInputs = function() {
    console.log('sti');
    $scope.showInputs = true;
    $scope.$apply();
  }
  $scope.inputs.page = 0;
  $scope.listMedia = function(cb) {
    $.ajax({
      url: 'videosAboutKaltura_listMedia',
      type: 'post',
      contentType: "application/json; charset=utf-8",      
      data: JSON.stringify($scope.inputs)
    })
    .done(function(data) {
      $scope.result = JSON.parse(data);
      $scope.$apply();
      if (cb) cb($scope.result);
    })
    .fail(function(err) {
       console.log('Error loading data:' + JSON.stringify(err));
    })
  }
  
  $scope.getPages = function() {
    var page = $scope.inputs.page;
    var pages = [1, 2, 3, 4, 5];
    if (page < 3) {
      return [1, 2, 3, 4, 5];
    } else {
      return pages.map(function(d) { return d + page - 2 });
    }
  }
})

app.controller('videosAboutColumbiaController', function($scope) {
  $scope.inputs =
      {"nameLike":"Columbia","orderBy":"+createdAt"}
  $scope.showInputs = false;
  $scope.showTheInputs = function() {
    console.log('sti');
    $scope.showInputs = true;
    $scope.$apply();
  }
  $scope.inputs.page = 0;
  $scope.listMedia = function(cb) {
    $.ajax({
      url: 'videosAboutColumbia_listMedia',
      type: 'post',
      contentType: "application/json; charset=utf-8",      
      data: JSON.stringify($scope.inputs)
    })
    .done(function(data) {
      $scope.result = JSON.parse(data);
      $scope.$apply();
      if (cb) cb($scope.result);
    })
    .fail(function(err) {
       console.log('Error loading data:' + JSON.stringify(err));
    })
  }
  
  $scope.getPages = function() {
    var page = $scope.inputs.page;
    var pages = [1, 2, 3, 4, 5];
    if (page < 3) {
      return [1, 2, 3, 4, 5];
    } else {
      return pages.map(function(d) { return d + page - 2 });
    }
  }
})

