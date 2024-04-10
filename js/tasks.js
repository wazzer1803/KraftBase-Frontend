let tasks = [
    {
        title: 'Kochwelt Page & Recipe Recommender',
        description: 'Build start page with recipe recommendation.',
        assigned: [
            {
                firstName: 'Emmanuel',
                lastName: 'Mauer',
                initials: 'EM',
                userColor: '#FF745E',
                email: 'emmanuelma@gmail.com',
                phone: '+49 1111 111 11 8',
                password: null,
                isYou: false,
                userID: 7
            },
            {
                firstName: "Marcel",
                lastName: "Bauer",
                initials: 'MB',
                userColor: "#FF5EB3",
                email: 'marcelbauer@gmail.com',
                phone: '+49 1111 111 11 2',
                password: null,
                isYou: false,
                userID: 1
            },
            {
                firstName: 'Anja',
                lastName: 'Schulz',
                initials: 'AS',
                userColor: '#1FD7C1',
                email: 'schulz@gmail.com',
                phone: '+49 1111 111 11 4',
                password: null,
                isYou: false,
                userID: 3
            }
        ],
        dueDate: '2024-02-10',
        prio: 'Low',
        category: 'User Story',
        subtasks: [
            {
                taskDescription: 'Implement Recipe Recommendation',
                isDone: false,
            },
            {
                taskDescription: 'Start Page Layout',
                isDone: true,
            }
            ],
        status: "inProgressStatus",
        id: 0
    },
    {
        title: 'CSS Architecture Planning',
        description: 'Define CSS naming conventions and structure.',
        assigned: [
            {
                firstName: 'Sofia',
                lastName: 'Müller',
                initials: 'SM',
                userColor: '#FF7A00',
                email: 'sofiam@gmail.com',
                phone: '+49 1111 111 11 1',
                password: null,
                isYou: false,
                userID: 0
            },
            {
                firstName: 'Benedikt',
                lastName: 'Ziegler',
                initials: 'BZ',
                userColor: '#FF4646',
                email: 'benedikt.s@gmail.com',
                phone: '+49 1111 111 11 5',
                password: null,
                isYou: false,
                userID: 4
            }
        ],
        dueDate: '2024-02-5',
        prio: 'Urgent',
        category: 'Technical Task',
        subtasks: [
            {
                taskDescription: 'Establish CSS Methodology',
                isDone: true,
            },
            {
                taskDescription: 'Setup Base Styles',
                isDone: true,
            }
            ],
        status: "doneStatus",
        id: 1
    },
    {
        title: 'Daily Code Review',
        description: 'Review and provide feedback on daily code submissions.',
        assigned: [
            {
                firstName: 'Eva',
                lastName: 'Fischer',
                initials: 'EF',
                userColor: '#9327FF',
                email: 'evafischer@gmail.com',
                phone: '+49 1111 111 11 7',
                password: null,
                isYou: false,
                userID: 6
            },
            {
                firstName: 'Dave',
                lastName: 'Schmidt',
                initials: 'DS',
                userColor: '#FFC107',
                email: 'davesch@gmail.com',
                phone: '+49 1111 111 11 7',
                password: null,
                isYou: false,
                userID: 9
            }
        ],
        dueDate: '2024-02-15',
        prio: 'Low',
        category: 'Technical Task',
        subtasks: [
            {
                taskDescription: 'Review JavaScript Code',
                isDone: true,
            },
            {
                taskDescription: 'Provide Feedback',
                isDone: true,
            }
        ],
        status: "awaitFeedbackStatus",
        id: 2
    },
    {
        title: 'Bug Fixing - Production Issue',
        description: 'Identify and fix bugs in the production codebase.',
        assigned: [
            {
                firstName: 'Markus',
                lastName: 'Hoffmann',
                initials: 'MH',
                userColor: '#673AB7',
                email: 'markus.hoff@gmail.com',
                phone: '+49 1111 111 11 3',
                password: null,
                isYou: false,
                userID: 10
            },
            {
                firstName: 'Lisa',
                lastName: 'Mayer',
                initials: 'LM',
                userColor: '#4CAF50',
                email: 'lisam@gmail.com',
                phone: '+49 1111 111 11 6',
                password: null,
                isYou: false,
                userID: 11
            }
        ],
        dueDate: '2024-02-8',
        prio: 'Urgent',
        category: 'Technical Task',
        subtasks: [
            {
                taskDescription: 'Identify Production Bugs',
                isDone: false,
            },
            {
                taskDescription: 'Implement Fixes',
                isDone: false,
            }
        ],
        status: "toDoStatus",
        id: 3
    },
    {
        title: 'User Authentication and Authorization',
        description: 'Implement user authentication and authorization system for the application.',
        assigned: [
            {
                firstName: 'Tatjana',
                lastName: 'Wolf',
                initials: 'TW',
                userColor: '#028A0F',
                email: 't.wolf@gmail.com',
                phone: '+49 1111 111 11 9',
                password: null,
                isYou: false,
                userID: 8
            },

        ],
        dueDate: '2024-02-20',
        prio: 'Medium',
        category: 'User Story',
        subtasks: [
            {
                taskDescription: 'Implement Sign-up functionality',
                isDone: true,
            },
            {
                taskDescription: 'Develop Login and Logout features',
                isDone: true,
            },
            {
                taskDescription: 'Define and Enforce User Roles',
                isDone: true,
            }
        ],
        status: "awaitFeedbackStatus",
        id: 4
    }
];