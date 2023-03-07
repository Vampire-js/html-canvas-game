import { LevelsMenu } from "../menus/LevelsMenu";
import { MainMenu } from "../menus/MainMenu";

export function UIManager(elements){
    MainMenu(elements.main_menu)
    LevelsMenu(elements.levels_menu)
}