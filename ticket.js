/*

Ticket system

*/

// tickets Array holding individual ticket objects
const tickets = [
    // test ticket
    {
        id: 1,
        status: 'resolved',
        category: 'feature request',
        priority: 'medium',
        subject: 'New test ticket subjet',
        description: 'Demo Descripton'
    },
];

const status = ["open", "closed", "resolved", "waiting"];
const priority = ["critical", "high", "medium", "low"];
const category = ["login", "internet", "computer", "feature request", "other"];

// function that creates ticket
function createTicket(status, category, priority, subject, description){
    // container for individual ticket
    const ticket = {};

    ticket.id = tickets.length + 1;
    ticket.status = status;
    ticket.category = category;
    ticket.priority = priority;
    ticket.subject = subject;
    ticket.description = description;

    // push ticket into tickets array
    tickets.push(ticket);
    return 0; // return 0 on success
}

// test createTicket
createTicket(status[1], category[1], priority[0], "New test ticket subjet", "Demo Descripton");
console.log(tickets);

