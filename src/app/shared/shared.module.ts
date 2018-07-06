import { NgModule } from '@angular/core';
import { EnumToArrayPipe } from '../pipes/enumtoarray.pipe';
import { FilterPipe} from '../pipes/filter.pipe';

@NgModule({
  	declarations: [ EnumToArrayPipe, FilterPipe ],
	exports:      [ EnumToArrayPipe, FilterPipe ]
})
export class SharedModule {}