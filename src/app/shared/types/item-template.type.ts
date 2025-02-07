import { TableRow } from './general';

export const ITEM_TEMPLATE_TABLE = 'item_template';
export const ITEM_TEMPLATE_ID = 'entry';
export const ITEM_TEMPLATE_NAME = 'name';
export const ITEM_TEMPLATE_SEARCH_FIELDS = [ITEM_TEMPLATE_ID, ITEM_TEMPLATE_NAME];
export const ITEM_TEMPLATE_CUSTOM_STARTING_ID = 90_000;

export const DISENCHANT_TEMPLATE_LOOT_ID = 'disenchant_id';

export class ItemTemplate extends TableRow {
  entry: number = 0;
  name: string = '';
  class: number = 0;
  subclass: number = 0;
  description: string = '';
  display_id: number = 0;
  quality: number = 0;
  flags: number = 0;
  buy_count: number = 1;
  buy_price: number = 0;
  sell_price: number = 0;
  inventory_type: number = 0;
  allowable_class: number = -1;
  allowable_race: number = -1;
  item_level: number = 0;
  required_level: number = 0;
  required_skill: number = 0;
  required_skill_rank: number = 0;
  required_spell: number = 0;
  required_honor_rank: number = 0;
  required_city_rank: number = 0;
  required_reputation_faction: number = 0;
  required_reputation_rank: number = 0;
  max_count: number = 0;
  stackable: number = 1;
  container_slots: number = 0;
  stat_type1: number = 0;
  stat_value1: number = 0;
  stat_type2: number = 0;
  stat_value2: number = 0;
  stat_type3: number = 0;
  stat_value3: number = 0;
  stat_type4: number = 0;
  stat_value4: number = 0;
  stat_type5: number = 0;
  stat_value5: number = 0;
  stat_type6: number = 0;
  stat_value6: number = 0;
  stat_type7: number = 0;
  stat_value7: number = 0;
  stat_type8: number = 0;
  stat_value8: number = 0;
  stat_type9: number = 0;
  stat_value9: number = 0;
  stat_type10: number = 0;
  stat_value10: number = 0;
  delay: number = 1000;
  range_mod: number = 0;
  ammo_type: number = 0;
  dmg_min1: number = 0;
  dmg_max1: number = 0;
  dmg_type1: number = 0;
  dmg_min2: number = 0;
  dmg_max2: number = 0;
  dmg_type2: number = 0;
  dmg_min3: number = 0;
  dmg_max3: number = 0;
  dmg_type3: number = 0;
  dmg_min4: number = 0;
  dmg_max4: number = 0;
  dmg_type4: number = 0;
  dmg_min5: number = 0;
  dmg_max5: number = 0;
  dmg_type5: number = 0;
  block: number = 0;
  armor: number = 0;
  holy_res: number = 0;
  fire_res: number = 0;
  nature_res: number = 0;
  frost_res: number = 0;
  shadow_res: number = 0;
  arcane_res: number = 0;
  spellid_1: number = 0;
  spelltrigger_1: number = 0;
  spellcharges_1: number = 0;
  spellppmrate_1: number = 0;
  spellcooldown_1: number = -1;
  spellcategory_1: number = 0;
  spellcategorycooldown_1: number = -1;
  spellid_2: number = 0;
  spelltrigger_2: number = 0;
  spellcharges_2: number = 0;
  spellppmrate_2: number = 0;
  spellcooldown_2: number = -1;
  spellcategory_2: number = 0;
  spellcategorycooldown_2: number = -1;
  spellid_3: number = 0;
  spelltrigger_3: number = 0;
  spellcharges_3: number = 0;
  spellppmrate_3: number = 0;
  spellcooldown_3: number = -1;
  spellcategory_3: number = 0;
  spellcategorycooldown_3: number = -1;
  spellid_4: number = 0;
  spelltrigger_4: number = 0;
  spellcharges_4: number = 0;
  spellppmrate_4: number = 0;
  spellcooldown_4: number = -1;
  spellcategory_4: number = 0;
  spellcategorycooldown_4: number = -1;
  spellid_5: number = 0;
  spelltrigger_5: number = 0;
  spellcharges_5: number = 0;
  spellppmrate_5: number = 0;
  spellcooldown_5: number = -1;
  spellcategory_5: number = 0;
  spellcategorycooldown_5: number = -1;
  bonding: number = 0;
  page_text: number = 0;
  page_language: number = 0;
  page_material: number = 0;
  start_quest: number = 0;
  lock_id: number = 0;
  material: number = 0;
  sheath: number = 0;
  random_property: number = 0;
  set_id: number = 0;
  max_durability: number = 0;
  area_bound: number = 0;
  map_bound: number = 0;
  duration: number = 0;
  bag_family: number = 0;
  disenchant_id: number = 0;
  food_type: number = 0;
  min_money_loot: number = 0;
  max_money_loot: number = 0;
  extra_flags: number = 0;
  ignored: number = 0;
}
