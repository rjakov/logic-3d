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
export const loadNewSceneByObject = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const { actionArguments, apiUrl, app, logic, scene } = args;
    if (!actionArguments || !scene) {
        console.warn(`Action: [loadNewSceneByObject] actionArguments or scene is absent`);
        return;
    }
    let { object3d } = actionArguments;
    if (!object3d) {
        console.warn(`Action: [loadNewSceneByObject] object is absent`);
        return;
    }
    const objectToChangeEntity = logic.object3ds.find(o => o.id === object3d);
    if (!objectToChangeEntity) {
        console.warn(`Action: [loadNewSceneByObject] object with id ${object3d} is not attached to logic`);
        return;
    }
    let currentObject = scene.getObjectByName(objectToChangeEntity.sceneName);
    if (!currentObject) {
        const url = UtilsService.getMainAsset(logic.asset.assetUrls);
        const loadedScene = yield UtilsService.loadScene(app, `${apiUrl}${url}`);
        if (scene.children.length) {
            yield scene.children.slice().forEach(child => scene.remove(child));
        }
        yield scene.add(loadedScene);
        return yield Promise.resolve();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1uZXctc2NlbmUtYnktb2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbnMvbG9hZC1uZXctc2NlbmUtYnktb2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBYSxDQUFPLElBQTRCLEVBQUUsRUFBRTtJQUNuRixNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztJQUM1RCxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUVBQW1FLENBQUMsQ0FBQztRQUNsRixPQUFPO0tBQ1I7SUFDRCxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsZUFBZSxDQUFDO0lBQ25DLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7UUFDaEUsT0FBTztLQUNSO0lBRUQsTUFBTSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUM7SUFFMUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1FBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsaURBQWlELFFBQVEsMkJBQTJCLENBQUMsQ0FBQztRQUNuRyxPQUFPO0tBQ1I7SUFFRCxJQUFJLGFBQWEsR0FBUSxLQUFLLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRS9FLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDbEIsTUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sV0FBVyxHQUFHLE1BQVksWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUUsQ0FBQztRQUNoRixJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3pCLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDbkU7UUFDRCxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDNUIsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtLQUMvQjtBQUNILENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uRm4gfSBmcm9tICcuLi9tb2RlbC9hY3Rpb24tZm4nO1xyXG5pbXBvcnQgeyBFeGVjdXRlQWN0aW9uQXJndW1lbnRzIH0gZnJvbSAnLi4vbW9kZWwvZXhlY3V0ZS1hY3Rpb24tYXJndW1lbnRzJztcclxuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZE5ld1NjZW5lQnlPYmplY3Q6IEFjdGlvbkZuID0gYXN5bmMgKGFyZ3M6IEV4ZWN1dGVBY3Rpb25Bcmd1bWVudHMpID0+IHtcclxuICBjb25zdCB7IGFjdGlvbkFyZ3VtZW50cywgYXBpVXJsLCBhcHAsIGxvZ2ljLCBzY2VuZSB9ID0gYXJncztcclxuICBpZiAoIWFjdGlvbkFyZ3VtZW50cyB8fCAhc2NlbmUpIHtcclxuICAgIGNvbnNvbGUud2FybihgQWN0aW9uOiBbbG9hZE5ld1NjZW5lQnlPYmplY3RdIGFjdGlvbkFyZ3VtZW50cyBvciBzY2VuZSBpcyBhYnNlbnRgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgbGV0IHsgb2JqZWN0M2QgfSA9IGFjdGlvbkFyZ3VtZW50cztcclxuICBpZiAoIW9iamVjdDNkKSB7XHJcbiAgICBjb25zb2xlLndhcm4oYEFjdGlvbjogW2xvYWROZXdTY2VuZUJ5T2JqZWN0XSBvYmplY3QgaXMgYWJzZW50YCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBvYmplY3RUb0NoYW5nZUVudGl0eSA9IGxvZ2ljLm9iamVjdDNkcy5maW5kKG8gPT4gby5pZCA9PT0gb2JqZWN0M2QpO1xyXG5cclxuICBpZiAoIW9iamVjdFRvQ2hhbmdlRW50aXR5KSB7XHJcbiAgICBjb25zb2xlLndhcm4oYEFjdGlvbjogW2xvYWROZXdTY2VuZUJ5T2JqZWN0XSBvYmplY3Qgd2l0aCBpZCAke29iamVjdDNkfSBpcyBub3QgYXR0YWNoZWQgdG8gbG9naWNgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBjdXJyZW50T2JqZWN0OiBhbnkgPSBzY2VuZS5nZXRPYmplY3RCeU5hbWUob2JqZWN0VG9DaGFuZ2VFbnRpdHkuc2NlbmVOYW1lKTtcclxuXHJcbiAgaWYgKCFjdXJyZW50T2JqZWN0KSB7XHJcbiAgICBjb25zdCB1cmwgPSBVdGlsc1NlcnZpY2UuZ2V0TWFpbkFzc2V0KGxvZ2ljLmFzc2V0LmFzc2V0VXJscyk7XHJcbiAgICBjb25zdCBsb2FkZWRTY2VuZSA9IGF3YWl0ICg8YW55PlV0aWxzU2VydmljZS5sb2FkU2NlbmUoYXBwLCBgJHthcGlVcmx9JHt1cmx9YCkpO1xyXG4gICAgaWYgKHNjZW5lLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICBhd2FpdCBzY2VuZS5jaGlsZHJlbi5zbGljZSgpLmZvckVhY2goY2hpbGQgPT4gc2NlbmUucmVtb3ZlKGNoaWxkKSlcclxuICAgIH1cclxuICAgIGF3YWl0IHNjZW5lLmFkZChsb2FkZWRTY2VuZSlcclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoKVxyXG4gIH1cclxufTtcclxuIl19