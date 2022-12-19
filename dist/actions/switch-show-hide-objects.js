var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UtilsService } from '../services/utils.service';
let on = false;
export const switchShowHideObjects = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const { actionArguments, apiUrl, app, logic, scene } = args;
    if (!actionArguments || !scene) {
        console.warn(`Action: [showHideObjects] actionArguments or scene is absent`);
        return;
    }
    const { hiddenObjects, shownObjects } = actionArguments;
    yield UtilsService.changeObjectsVisibility(apiUrl, app, logic, shownObjects, scene, on ? false : true);
    yield UtilsService.changeObjectsVisibility(apiUrl, app, logic, hiddenObjects, scene, on ? true : false);
    on = !on;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLXNob3ctaGlkZS1vYmplY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbnMvc3dpdGNoLXNob3ctaGlkZS1vYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUd6RCxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFFZixNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxDQUFPLElBQTRCLEVBQUUsRUFBRTtJQUMxRSxNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztJQUM1RCxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsOERBQThELENBQUMsQ0FBQztRQUM3RSxPQUFPO0tBQ1I7SUFDRCxNQUFNLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxHQUFHLGVBQWUsQ0FBQztJQUN4RCxNQUFNLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RyxNQUFNLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDWCxDQUFDLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeGVjdXRlQWN0aW9uQXJndW1lbnRzIH0gZnJvbSAnLi4vbW9kZWwvZXhlY3V0ZS1hY3Rpb24tYXJndW1lbnRzJztcclxuXHJcbmxldCBvbiA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN3aXRjaFNob3dIaWRlT2JqZWN0cyA9IGFzeW5jIChhcmdzOiBFeGVjdXRlQWN0aW9uQXJndW1lbnRzKSA9PiB7XHJcbiAgY29uc3QgeyBhY3Rpb25Bcmd1bWVudHMsIGFwaVVybCwgYXBwLCBsb2dpYywgc2NlbmUgfSA9IGFyZ3M7XHJcbiAgaWYgKCFhY3Rpb25Bcmd1bWVudHMgfHwgIXNjZW5lKSB7XHJcbiAgICBjb25zb2xlLndhcm4oYEFjdGlvbjogW3Nob3dIaWRlT2JqZWN0c10gYWN0aW9uQXJndW1lbnRzIG9yIHNjZW5lIGlzIGFic2VudGApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCB7IGhpZGRlbk9iamVjdHMsIHNob3duT2JqZWN0cyB9ID0gYWN0aW9uQXJndW1lbnRzO1xyXG4gIGF3YWl0IFV0aWxzU2VydmljZS5jaGFuZ2VPYmplY3RzVmlzaWJpbGl0eShhcGlVcmwsIGFwcCwgbG9naWMsIHNob3duT2JqZWN0cywgc2NlbmUsIG9uID8gZmFsc2UgOiB0cnVlKTtcclxuICBhd2FpdCBVdGlsc1NlcnZpY2UuY2hhbmdlT2JqZWN0c1Zpc2liaWxpdHkoYXBpVXJsLCBhcHAsIGxvZ2ljLCBoaWRkZW5PYmplY3RzLCBzY2VuZSwgb24gPyB0cnVlIDogZmFsc2UpO1xyXG4gIG9uID0gIW9uO1xyXG59O1xyXG4iXX0=