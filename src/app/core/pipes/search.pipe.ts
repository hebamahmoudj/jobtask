import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(users: User[], searchString: string): User[] {
    // Convert search string to lowercase for case-insensitive search
    const searchQuery = searchString.toLowerCase();
    
    return users.filter((item) => {
        const itemId = item.id.toString().toLowerCase(); // Assuming id is a number
        const itemName = item.first_name.toLowerCase();
        return itemId.includes(searchQuery) || itemName.includes(searchQuery);
    });
}

  

}
