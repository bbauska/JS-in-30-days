<!-- day 08 javascript console -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Array Cardio 💪💪</title>
  <!-- Favicon -->
  <link rel="icon" href="/favicon.png">
</head>
<body>
  <p><em>Psst: have a look at the JavaScript Console</em> 💁</p>
  <script>
    // ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];


    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    var atLeast19OrOlder = people.some(function (person) {
      var currentYear = (new Date()).getFullYear();
      return currentYear - person.year >= 19;
    });

    console.log("At least one person 19 or older: " + atLeast19OrOlder)

    // Array.prototype.every() // is everyone 19 or older?
    var everyone19OrOlder = people.every(function (person) {
      var currentYear = (new Date()).getFullYear();
      return currentYear - person.year >= 19;
    });

    console.log("Everyone 19 or older: " + everyone19OrOlder);

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    var comment = comments.find(function (comment) {
      return comment.id === 823423;
    });

    console.log('Log the found comment: ')
    console.log(comment);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    var index = comments.findIndex(function (comment) {
      return comment.id === 823423;
    });

    console.log('Before one of items deleted: ');
    console.table(comments);
    comments.splice(index, 1);
    console.log('After one of items deleted: ');
    console.table(comments);
  </script>
</body>
</html>
