function solve(t1, t2, t3, totalClients) {
    let workedTime = 0;
    let clientsServed = 0;
    let clientsRemaining = totalClients
    let clientsServedPerHour = t1 +t2 +t3;
    while( clientsRemaining > 0 ) {
        
        if(clientsServed < totalClients){
            clientsServed += clientsServedPerHour;
            clientsRemaining--
            workedTime ++;
        } else break;
        if(clientsServed < totalClients){
            clientsServed += clientsServedPerHour;
            clientsRemaining--
            workedTime ++;
        } else break;
        if(clientsServed < totalClients){
            clientsServed += clientsServedPerHour;
            clientsRemaining--;
            workedTime++;
        } else break;
        workedTime ++;
    }

    console.log(`Time needed: ${workedTime}h.`);
    
}

solve(5, 6, 4, 20);
solve(1, 2, 3, 45);
solve(3, 2, 5, 40);
