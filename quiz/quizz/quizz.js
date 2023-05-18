let module = angular.module('my-app', [])
    module.controller('my-Controller', function($scope) {
        $scope.questions  = [
            {
                IDs: 'ques1',
                questionText : "What is 2*5?",
                answers : [2, 5, 10, 15, 20],
                correctAnswer : 10,
                point : 1,
                value: ''
            },
            {
                IDs: 'ques2',
                questionText : "What is 3*6?",
                answers : [2, 5, 10, 18, 20],
                correctAnswer : 18,
                point : 2,
                value: ''
            },
            {
                IDs: 'ques3',
                questionText : "What is 3*7?",
                answers : [2, 5, 10, 18, 21],
                correctAnswer : 21,
                point : 3,
                value: ''
            },
            {
                IDs: 'ques4',
                questionText : "What is 3*8?",
                answers : [2, 5, 10, 18, 24],
                correctAnswer : 24,
                point : 4,
                value: ''
            }
        ]
    })
