var defaultThreads = [
    {
        id: 1,
        title: "Fall of Vader",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Rise of Skywalker",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}