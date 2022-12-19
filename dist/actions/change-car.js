var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { setCarWheels } from './set-car-wheels';
import { UtilsService } from '../services/utils.service';
export const changeCar = (scene, app, logic, menuLogicObject, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const wheelObjects = scene.getObjectByName('Wheel_Objects');
    let currentObjectInScene;
    for (let i = 0; i < logic.data.objects.length; i++) {
        if (!currentObjectInScene) {
            currentObjectInScene = UtilsService.getObjectByName(scene, logic.data.objects[i].sceneName);
        }
        else {
            break;
        }
    }
    if (currentObjectInScene.name === menuLogicObject.sceneName)
        return;
    const objectToChange = yield (UtilsService.getObjectByEntity(scene, app, menuLogicObject, apiUrl));
    const allObject = UtilsService.getObjectBySceneNameInEntity(scene, currentObjectInScene.name);
    const parent = allObject.parent;
    parent.remove(allObject);
    parent.add(objectToChange);
    scene.add(wheelObjects);
    setCarWheels(app);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLWNhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2NoYW5nZS1jYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsQ0FBTyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDNUUsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1RCxJQUFJLG9CQUFvQixDQUFDO0lBRXpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEQsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3pCLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxlQUFlLENBQ2pELEtBQUssRUFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQ2hDLENBQUM7U0FDSDthQUFNO1lBQ0wsTUFBTTtTQUNQO0tBQ0Y7SUFFRCxJQUFJLG9CQUFvQixDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsU0FBUztRQUFFLE9BQU87SUFFcEUsTUFBTSxjQUFjLEdBQUcsTUFBWSxDQUNqQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQ25FLENBQUM7SUFFSCxNQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsNEJBQTRCLENBQ3pELEtBQUssRUFDTCxvQkFBb0IsQ0FBQyxJQUFJLENBQzFCLENBQUM7SUFFRixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUUzQixLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldENhcldoZWVscyB9IGZyb20gJy4vc2V0LWNhci13aGVlbHMnO1xyXG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VDYXIgPSBhc3luYyAoc2NlbmUsIGFwcCwgbG9naWMsIG1lbnVMb2dpY09iamVjdCwgYXBpVXJsKSA9PiB7XHJcbiAgY29uc3Qgd2hlZWxPYmplY3RzID0gc2NlbmUuZ2V0T2JqZWN0QnlOYW1lKCdXaGVlbF9PYmplY3RzJyk7XHJcbiAgbGV0IGN1cnJlbnRPYmplY3RJblNjZW5lO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvZ2ljLmRhdGEub2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKCFjdXJyZW50T2JqZWN0SW5TY2VuZSkge1xyXG4gICAgICBjdXJyZW50T2JqZWN0SW5TY2VuZSA9IFV0aWxzU2VydmljZS5nZXRPYmplY3RCeU5hbWUoXHJcbiAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgbG9naWMuZGF0YS5vYmplY3RzW2ldLnNjZW5lTmFtZVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudE9iamVjdEluU2NlbmUubmFtZSA9PT0gbWVudUxvZ2ljT2JqZWN0LnNjZW5lTmFtZSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBvYmplY3RUb0NoYW5nZSA9IGF3YWl0ICg8YW55PihcclxuICAgIFV0aWxzU2VydmljZS5nZXRPYmplY3RCeUVudGl0eShzY2VuZSwgYXBwLCBtZW51TG9naWNPYmplY3QsIGFwaVVybClcclxuICApKTtcclxuXHJcbiAgY29uc3QgYWxsT2JqZWN0ID0gVXRpbHNTZXJ2aWNlLmdldE9iamVjdEJ5U2NlbmVOYW1lSW5FbnRpdHkoXHJcbiAgICBzY2VuZSxcclxuICAgIGN1cnJlbnRPYmplY3RJblNjZW5lLm5hbWVcclxuICApO1xyXG5cclxuICBjb25zdCBwYXJlbnQgPSBhbGxPYmplY3QucGFyZW50O1xyXG4gIHBhcmVudC5yZW1vdmUoYWxsT2JqZWN0KTtcclxuICBwYXJlbnQuYWRkKG9iamVjdFRvQ2hhbmdlKTtcclxuXHJcbiAgc2NlbmUuYWRkKHdoZWVsT2JqZWN0cyk7XHJcbiAgc2V0Q2FyV2hlZWxzKGFwcCk7XHJcbn07XHJcbiJdfQ==