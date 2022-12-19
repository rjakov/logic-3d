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
export const changeWindows = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const { actionArguments, apiUrl, app, logic, scene } = args;
    if (!actionArguments || !scene) {
        console.warn(`Action: [changeWindows] actionArguments or scene is absent`);
        return;
    }
    let { object3d, material } = actionArguments;
    if (!object3d) {
        console.warn(`Action: [changeWindows] object or material is absent`);
        return;
    }
    const objectToChangeEntity = logic.object3ds.find(o => o.id === object3d);
    const materialEntity = logic.materials.find(o => o.id === material);
    if (!objectToChangeEntity) {
        console.warn(`Action: [changeWindows] object with id ${object3d} is not attached to logic`);
        return;
    }
    if (!materialEntity) {
        console.warn(`Action: [changeWindows] material with id ${material} is not attached to logic`);
        return;
    }
    if (!(materialEntity.data && materialEntity.data.properties && materialEntity.data.properties.length)) {
        console.warn(`Action: [changeWindows] material properties is absent`);
        return;
    }
    let materialProperties = materialEntity.data.properties;
    let object3ds = [];
    let sceneNameRegexp = new RegExp(`^${objectToChangeEntity.sceneName}.*`, 'gi');
    scene.traverse(sc => {
        if (sc.name === objectToChangeEntity.sceneName) {
            // if (sc.name.includes(objectToChangeEntity.sceneName) || sceneNameRegexp.test(sc.name)) {
            object3ds = [...object3ds, sc];
        }
    });
    if (!object3ds.length) {
        console.warn(`[changeWindows] material ${objectToChangeEntity.sceneName} no object3ds found`);
        return;
    }
    const url = UtilsService.getMainAsset(logic.asset.assetUrls);
    const loadedScene = yield UtilsService.loadScene(app, `${apiUrl}${url}`);
    let loadedSceneCopy = loadedScene.clone();
    loadedSceneCopy.name = objectToChangeEntity.sceneName;
    object3ds.forEach(obj3d => {
        let parent = obj3d.parent;
        // // set object position
        loadedSceneCopy.position.x = obj3d.position.x;
        loadedSceneCopy.position.y = obj3d.position.y;
        loadedSceneCopy.position.z = obj3d.position.z;
        parent.remove(obj3d);
        parent.add(loadedSceneCopy);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXdpbmRvd3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9ucy9jaGFuZ2Utd2luZG93cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHekQsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFhLENBQU8sSUFBNEIsRUFBRSxFQUFFO0lBQzVFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzVELElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO1FBQzNFLE9BQU87S0FDUjtJQUNELElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsZUFBZSxDQUFDO0lBQzdDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLHNEQUFzRCxDQUFDLENBQUM7UUFDckUsT0FBTztLQUNSO0lBRUQsTUFBTSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUM7SUFDMUUsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDO0lBRXBFLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtRQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxRQUFRLDJCQUEyQixDQUFDLENBQUM7UUFDNUYsT0FBTztLQUNSO0lBRUQsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLDRDQUE0QyxRQUFRLDJCQUEyQixDQUFDLENBQUM7UUFDOUYsT0FBTztLQUNSO0lBRUQsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNyRyxPQUFPLENBQUMsSUFBSSxDQUFDLHVEQUF1RCxDQUFDLENBQUM7UUFDdEUsT0FBTztLQUNSO0lBRUQsSUFBSSxrQkFBa0IsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUV2RCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUE7SUFDbEIsSUFBSSxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxTQUFTLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUM5RSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ2xCLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7WUFDaEQsMkZBQTJGO1lBQ3pGLFNBQVMsR0FBRyxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1NBQy9CO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixvQkFBb0IsQ0FBQyxTQUFTLHFCQUFxQixDQUFDLENBQUM7UUFDOUYsT0FBTztLQUNSO0lBRUQsTUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdELE1BQU0sV0FBVyxHQUFHLE1BQVcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUUsQ0FBQztJQUMvRSxJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDekMsZUFBZSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUE7SUFFckQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN4QixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFBO1FBRXpCLHlCQUF5QjtRQUN6QixlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUM3QyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUM3QyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbkZuIH0gZnJvbSAnLi4vbW9kZWwvYWN0aW9uLWZuJztcclxuaW1wb3J0IHsgRXhlY3V0ZUFjdGlvbkFyZ3VtZW50cyB9IGZyb20gJy4uL21vZGVsL2V4ZWN1dGUtYWN0aW9uLWFyZ3VtZW50cyc7XHJcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlV2luZG93czogQWN0aW9uRm4gPSBhc3luYyAoYXJnczogRXhlY3V0ZUFjdGlvbkFyZ3VtZW50cykgPT4ge1xyXG4gIGNvbnN0IHsgYWN0aW9uQXJndW1lbnRzLCBhcGlVcmwsIGFwcCwgbG9naWMsIHNjZW5lIH0gPSBhcmdzO1xyXG4gIGlmICghYWN0aW9uQXJndW1lbnRzIHx8ICFzY2VuZSkge1xyXG4gICAgY29uc29sZS53YXJuKGBBY3Rpb246IFtjaGFuZ2VXaW5kb3dzXSBhY3Rpb25Bcmd1bWVudHMgb3Igc2NlbmUgaXMgYWJzZW50YCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGxldCB7IG9iamVjdDNkLCBtYXRlcmlhbCB9ID0gYWN0aW9uQXJndW1lbnRzO1xyXG4gIGlmICghb2JqZWN0M2QpIHtcclxuICAgIGNvbnNvbGUud2FybihgQWN0aW9uOiBbY2hhbmdlV2luZG93c10gb2JqZWN0IG9yIG1hdGVyaWFsIGlzIGFic2VudGApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb2JqZWN0VG9DaGFuZ2VFbnRpdHkgPSBsb2dpYy5vYmplY3QzZHMuZmluZChvID0+IG8uaWQgPT09IG9iamVjdDNkKTtcclxuICBjb25zdCBtYXRlcmlhbEVudGl0eSA9IGxvZ2ljLm1hdGVyaWFscy5maW5kKG8gPT4gby5pZCA9PT0gbWF0ZXJpYWwpO1xyXG5cclxuICBpZiAoIW9iamVjdFRvQ2hhbmdlRW50aXR5KSB7XHJcbiAgICBjb25zb2xlLndhcm4oYEFjdGlvbjogW2NoYW5nZVdpbmRvd3NdIG9iamVjdCB3aXRoIGlkICR7b2JqZWN0M2R9IGlzIG5vdCBhdHRhY2hlZCB0byBsb2dpY2ApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFtYXRlcmlhbEVudGl0eSkge1xyXG4gICAgY29uc29sZS53YXJuKGBBY3Rpb246IFtjaGFuZ2VXaW5kb3dzXSBtYXRlcmlhbCB3aXRoIGlkICR7bWF0ZXJpYWx9IGlzIG5vdCBhdHRhY2hlZCB0byBsb2dpY2ApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKCEobWF0ZXJpYWxFbnRpdHkuZGF0YSAmJiBtYXRlcmlhbEVudGl0eS5kYXRhLnByb3BlcnRpZXMgJiYgbWF0ZXJpYWxFbnRpdHkuZGF0YS5wcm9wZXJ0aWVzLmxlbmd0aCkpIHtcclxuICAgIGNvbnNvbGUud2FybihgQWN0aW9uOiBbY2hhbmdlV2luZG93c10gbWF0ZXJpYWwgcHJvcGVydGllcyBpcyBhYnNlbnRgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBtYXRlcmlhbFByb3BlcnRpZXMgPSBtYXRlcmlhbEVudGl0eS5kYXRhLnByb3BlcnRpZXNcclxuXHJcbiAgbGV0IG9iamVjdDNkcyA9IFtdXHJcbiAgbGV0IHNjZW5lTmFtZVJlZ2V4cCA9IG5ldyBSZWdFeHAoYF4ke29iamVjdFRvQ2hhbmdlRW50aXR5LnNjZW5lTmFtZX0uKmAsICdnaScpXHJcbiAgc2NlbmUudHJhdmVyc2Uoc2MgPT4ge1xyXG4gICAgaWYgKHNjLm5hbWUgPT09IG9iamVjdFRvQ2hhbmdlRW50aXR5LnNjZW5lTmFtZSkge1xyXG4gICAgLy8gaWYgKHNjLm5hbWUuaW5jbHVkZXMob2JqZWN0VG9DaGFuZ2VFbnRpdHkuc2NlbmVOYW1lKSB8fCBzY2VuZU5hbWVSZWdleHAudGVzdChzYy5uYW1lKSkge1xyXG4gICAgICBvYmplY3QzZHMgPSBbLi4ub2JqZWN0M2RzLCBzY11cclxuICAgIH1cclxuICB9KVxyXG5cclxuICBpZiAoIW9iamVjdDNkcy5sZW5ndGgpIHtcclxuICAgIGNvbnNvbGUud2FybihgW2NoYW5nZVdpbmRvd3NdIG1hdGVyaWFsICR7b2JqZWN0VG9DaGFuZ2VFbnRpdHkuc2NlbmVOYW1lfSBubyBvYmplY3QzZHMgZm91bmRgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVybCA9IFV0aWxzU2VydmljZS5nZXRNYWluQXNzZXQobG9naWMuYXNzZXQuYXNzZXRVcmxzKTtcclxuICBjb25zdCBsb2FkZWRTY2VuZSA9IGF3YWl0KDxhbnk+VXRpbHNTZXJ2aWNlLmxvYWRTY2VuZShhcHAsIGAke2FwaVVybH0ke3VybH1gKSk7XHJcbiAgbGV0IGxvYWRlZFNjZW5lQ29weSA9IGxvYWRlZFNjZW5lLmNsb25lKClcclxuICBsb2FkZWRTY2VuZUNvcHkubmFtZSA9IG9iamVjdFRvQ2hhbmdlRW50aXR5LnNjZW5lTmFtZVxyXG5cclxuICBvYmplY3QzZHMuZm9yRWFjaChvYmozZCA9PiB7XHJcbiAgICBsZXQgcGFyZW50ID0gb2JqM2QucGFyZW50XHJcblxyXG4gICAgLy8gLy8gc2V0IG9iamVjdCBwb3NpdGlvblxyXG4gICAgbG9hZGVkU2NlbmVDb3B5LnBvc2l0aW9uLnggPSBvYmozZC5wb3NpdGlvbi54XHJcbiAgICBsb2FkZWRTY2VuZUNvcHkucG9zaXRpb24ueSA9IG9iajNkLnBvc2l0aW9uLnlcclxuICAgIGxvYWRlZFNjZW5lQ29weS5wb3NpdGlvbi56ID0gb2JqM2QucG9zaXRpb24uelxyXG4gICAgcGFyZW50LnJlbW92ZShvYmozZCk7XHJcbiAgICBwYXJlbnQuYWRkKGxvYWRlZFNjZW5lQ29weSk7XHJcbiAgfSlcclxufTtcclxuIl19