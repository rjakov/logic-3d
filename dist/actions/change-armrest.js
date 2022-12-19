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
export const changeArmrest = (scene, app, logic, menuLogicObject, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const mustBeVisibleEntities = menuLogicObject.sceneName
        .split(',')
        .map((sn) => ({ sceneName: sn.trim() }));
    const allObjectEntities = logic.data.objects.flatMap((o) => {
        return o.sceneName.split(',').map((sn) => ({ sceneName: sn.trim() }));
    });
    const mustBeInvisibleObjectEntities = allObjectEntities.filter((ao) => {
        return !mustBeVisibleEntities.find((mbv) => mbv.sceneName === ao.sceneName);
    });
    for (const mustBeVisibleEntity of mustBeVisibleEntities) {
        const object = yield (UtilsService.getObjectByEntity(scene, app, mustBeVisibleEntity, apiUrl));
        if (object) {
            if (object)
                object.visible = true;
        }
    }
    for (const mustBeInvisibleObjectEntity of mustBeInvisibleObjectEntities) {
        const object = yield (UtilsService.getObjectByEntity(scene, app, mustBeInvisibleObjectEntity, apiUrl));
        if (object) {
            if (object)
                object.visible = false;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLWFybXJlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9ucy9jaGFuZ2UtYXJtcmVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQU8sS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ2hGLE1BQU0scUJBQXFCLEdBQUcsZUFBZSxDQUFDLFNBQVM7U0FDcEQsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFM0MsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN6RCxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLDZCQUE2QixHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1FBQ3BFLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlFLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxNQUFNLG1CQUFtQixJQUFJLHFCQUFxQixFQUFFO1FBQ3ZELE1BQU0sTUFBTSxHQUFHLE1BQVksQ0FDekIsWUFBWSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQ3ZFLENBQUM7UUFDSCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksTUFBTTtnQkFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNuQztLQUNGO0lBRUQsS0FBSyxNQUFNLDJCQUEyQixJQUFJLDZCQUE2QixFQUFFO1FBQ3ZFLE1BQU0sTUFBTSxHQUFHLE1BQVksQ0FDekIsWUFBWSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxDQUFDLENBQy9FLENBQUM7UUFDSCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksTUFBTTtnQkFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUNwQztLQUNGO0FBQ0gsQ0FBQyxDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VBcm1yZXN0ID0gYXN5bmMgKHNjZW5lLCBhcHAsIGxvZ2ljLCBtZW51TG9naWNPYmplY3QsIGFwaVVybCkgPT4ge1xyXG4gIGNvbnN0IG11c3RCZVZpc2libGVFbnRpdGllcyA9IG1lbnVMb2dpY09iamVjdC5zY2VuZU5hbWVcclxuICAgIC5zcGxpdCgnLCcpXHJcbiAgICAubWFwKChzbikgPT4gKHsgc2NlbmVOYW1lOiBzbi50cmltKCkgfSkpO1xyXG5cclxuICBjb25zdCBhbGxPYmplY3RFbnRpdGllcyA9IGxvZ2ljLmRhdGEub2JqZWN0cy5mbGF0TWFwKChvKSA9PiB7XHJcbiAgICByZXR1cm4gby5zY2VuZU5hbWUuc3BsaXQoJywnKS5tYXAoKHNuKSA9PiAoeyBzY2VuZU5hbWU6IHNuLnRyaW0oKSB9KSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG11c3RCZUludmlzaWJsZU9iamVjdEVudGl0aWVzID0gYWxsT2JqZWN0RW50aXRpZXMuZmlsdGVyKChhbykgPT4ge1xyXG4gICAgcmV0dXJuICFtdXN0QmVWaXNpYmxlRW50aXRpZXMuZmluZCgobWJ2KSA9PiBtYnYuc2NlbmVOYW1lID09PSBhby5zY2VuZU5hbWUpO1xyXG4gIH0pO1xyXG5cclxuICBmb3IgKGNvbnN0IG11c3RCZVZpc2libGVFbnRpdHkgb2YgbXVzdEJlVmlzaWJsZUVudGl0aWVzKSB7XHJcbiAgICBjb25zdCBvYmplY3QgPSBhd2FpdCAoPGFueT4oXHJcbiAgICAgIFV0aWxzU2VydmljZS5nZXRPYmplY3RCeUVudGl0eShzY2VuZSwgYXBwLCBtdXN0QmVWaXNpYmxlRW50aXR5LCBhcGlVcmwpXHJcbiAgICApKTtcclxuICAgIGlmIChvYmplY3QpIHtcclxuICAgICAgaWYgKG9iamVjdCkgb2JqZWN0LnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBtdXN0QmVJbnZpc2libGVPYmplY3RFbnRpdHkgb2YgbXVzdEJlSW52aXNpYmxlT2JqZWN0RW50aXRpZXMpIHtcclxuICAgIGNvbnN0IG9iamVjdCA9IGF3YWl0ICg8YW55PihcclxuICAgICAgVXRpbHNTZXJ2aWNlLmdldE9iamVjdEJ5RW50aXR5KHNjZW5lLCBhcHAsIG11c3RCZUludmlzaWJsZU9iamVjdEVudGl0eSwgYXBpVXJsKVxyXG4gICAgKSk7XHJcbiAgICBpZiAob2JqZWN0KSB7XHJcbiAgICAgIGlmIChvYmplY3QpIG9iamVjdC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXX0=