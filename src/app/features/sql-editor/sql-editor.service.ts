import { Injectable } from '@angular/core';

@Injectable()
export class SqlEditorService {
  code =
    'SELECT entry, name, display_id1, npc_flags, level_min, level_max \n' +
    'FROM creature_template \n' +
    'WHERE entry > 100 \n' +
    'ORDER BY entry ASC \n' +
    'LIMIT 100';
}
