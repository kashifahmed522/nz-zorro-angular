import { Injectable } from '@angular/core';
import { Team } from '../components/student/team';

@Injectable()
export class TeamManagementService {
    saveTeam(team: Team) {
        console.log('------------TEAM------------');
        console.log('Team Name: ' + team.teamName);
        console.log('----- Employee Detail -----');
        for (let emp of team.employees) {
            console.log('Emp Name: ' + emp);
            console.log('-------------------');
        }
    }
}