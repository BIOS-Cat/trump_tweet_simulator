export class TweetsController {
    constructor($scope, Tweet) {
        'ngInject';

        Tweet.query().then(tweets => $scope.tweets = tweets);
    }
} 
