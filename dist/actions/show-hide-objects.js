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
export const showHideObjects = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const { actionArguments, apiUrl, app, logic, scene } = args;
    if (!actionArguments || !scene) {
        console.warn(`Action: [showHideObjects] actionArguments or scene is absent`);
        return;
    }
    const { hiddenObjects, shownObjects } = actionArguments;
    yield UtilsService.changeObjectsVisibility(apiUrl, app, logic, shownObjects, scene, true);
    yield UtilsService.changeObjectsVisibility(apiUrl, app, logic, hiddenObjects, scene, false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1oaWRlLW9iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9ucy9zaG93LWhpZGUtb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHekQsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLENBQU8sSUFBNEIsRUFBRSxFQUFFO0lBQ3BFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzVELElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1FBQzdFLE9BQU87S0FDUjtJQUNELE1BQU0sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLEdBQUcsZUFBZSxDQUFDO0lBQ3hELE1BQU0sWUFBWSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUYsTUFBTSxZQUFZLENBQUMsdUJBQXVCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM5RixDQUFDLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFeGVjdXRlQWN0aW9uQXJndW1lbnRzIH0gZnJvbSAnLi4vbW9kZWwvZXhlY3V0ZS1hY3Rpb24tYXJndW1lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93SGlkZU9iamVjdHMgPSBhc3luYyAoYXJnczogRXhlY3V0ZUFjdGlvbkFyZ3VtZW50cykgPT4ge1xyXG4gIGNvbnN0IHsgYWN0aW9uQXJndW1lbnRzLCBhcGlVcmwsIGFwcCwgbG9naWMsIHNjZW5lIH0gPSBhcmdzO1xyXG4gIGlmICghYWN0aW9uQXJndW1lbnRzIHx8ICFzY2VuZSkge1xyXG4gICAgY29uc29sZS53YXJuKGBBY3Rpb246IFtzaG93SGlkZU9iamVjdHNdIGFjdGlvbkFyZ3VtZW50cyBvciBzY2VuZSBpcyBhYnNlbnRgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3QgeyBoaWRkZW5PYmplY3RzLCBzaG93bk9iamVjdHMgfSA9IGFjdGlvbkFyZ3VtZW50cztcclxuICBhd2FpdCBVdGlsc1NlcnZpY2UuY2hhbmdlT2JqZWN0c1Zpc2liaWxpdHkoYXBpVXJsLCBhcHAsIGxvZ2ljLCBzaG93bk9iamVjdHMsIHNjZW5lLCB0cnVlKTtcclxuICBhd2FpdCBVdGlsc1NlcnZpY2UuY2hhbmdlT2JqZWN0c1Zpc2liaWxpdHkoYXBpVXJsLCBhcHAsIGxvZ2ljLCBoaWRkZW5PYmplY3RzLCBzY2VuZSwgZmFsc2UpO1xyXG59O1xyXG5cclxuXHJcbiJdfQ==