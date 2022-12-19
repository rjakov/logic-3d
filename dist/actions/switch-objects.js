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
// 1. Switch on Custom_Cabinets_grp - switch off CouchBar_Stool&Chairs_grp and vice versa
// 2. Switch on Pool_Table_grp switch off Car_Lift_grp and vice versa
export const switchObjects = (scene, app, menuLogicObject, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    let showBlockRegex = /(?:show:)(.+)(?:hide:)/i;
    let hideBlockRegex = /(?:hide:)(.+)(?:show:)/i;
    let toShowSceneNamesArr = menuLogicObject.sceneName
        .replace(/\s/g, '')
        .match(showBlockRegex);
    if (!toShowSceneNamesArr || !toShowSceneNamesArr.length) {
        showBlockRegex = /(?:show:)(.+)/i;
        toShowSceneNamesArr = menuLogicObject.sceneName
            .replace(/\s/g, '')
            .match(showBlockRegex);
    }
    if (!toShowSceneNamesArr || !toShowSceneNamesArr.length) {
        console.warn(`Nothing to show for ${menuLogicObject.sceneName}`);
        return;
    }
    let toHideSceneNamesArr = menuLogicObject.sceneName
        .replace(/\s/g, '')
        .match(hideBlockRegex);
    if (!toHideSceneNamesArr || !toHideSceneNamesArr.length) {
        hideBlockRegex = /(?:hide:)(.+)/i;
        toHideSceneNamesArr = menuLogicObject.sceneName
            .replace(/\s/g, '')
            .match(hideBlockRegex);
    }
    if (!toHideSceneNamesArr || !toHideSceneNamesArr.length) {
        console.warn(`Nothing to hide for ${menuLogicObject.sceneName}`);
        return;
    }
    const toShowSceneNames = toShowSceneNamesArr[1].split(',');
    const toHideSceneNames = toHideSceneNamesArr[1].split(',');
    const toShowObject3ds = yield UtilsService.getObjectsByEntityInScene(scene, {
        sceneName: toShowSceneNames.length > 1 ? toShowSceneNames.join(',') : toShowSceneNames[0]
    });
    const toHideObject3ds = yield UtilsService.getObjectsByEntityInScene(scene, {
        sceneName: toHideSceneNames.length > 1 ? toHideSceneNames.join(',') : toHideSceneNames[0]
    });
    if (!toShowObject3ds.length) {
        yield UtilsService.getObjectsByEntityInFromAsset(scene, app, Object.assign(Object.assign({}, menuLogicObject), { sceneName: toShowSceneNames.join(',') }), apiUrl);
    }
    if (!toShowObject3ds.length) {
        console.warn(`Nothing to show for ${menuLogicObject.sceneName}`);
        return;
    }
    // currently visible or not
    const currentlyVisible = toShowObject3ds.every(object3d => object3d.visible);
    if (toShowObject3ds.length) {
        toShowObject3ds.forEach(object3d => {
            if (object3d) {
                object3d.visible = !currentlyVisible;
            }
        });
    }
    if (toHideObject3ds.length && !currentlyVisible) {
        toHideObject3ds.forEach(object3d => {
            if (object3d) {
                object3d.visible = currentlyVisible;
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLW9iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9ucy9zd2l0Y2gtb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFFeEQseUZBQXlGO0FBQ3pGLHFFQUFxRTtBQUVyRSxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsQ0FBTyxLQUFLLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUN6RSxJQUFJLGNBQWMsR0FBRyx5QkFBeUIsQ0FBQTtJQUM5QyxJQUFJLGNBQWMsR0FBRyx5QkFBeUIsQ0FBQTtJQUM5QyxJQUFJLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxTQUFTO1NBQ2hELE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1NBQ2xCLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUV4QixJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7UUFDdkQsY0FBYyxHQUFHLGdCQUFnQixDQUFBO1FBQ2pDLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxTQUFTO2FBQzVDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO2FBQ2xCLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtLQUN6QjtJQUVELElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRTtRQUN2RCxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTtRQUNoRSxPQUFNO0tBQ1A7SUFFRCxJQUFJLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxTQUFTO1NBQ2hELE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1NBQ2xCLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUV4QixJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7UUFDdkQsY0FBYyxHQUFHLGdCQUFnQixDQUFBO1FBQ2pDLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxTQUFTO2FBQzVDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO2FBQ2xCLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtLQUN6QjtJQUVELElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRTtRQUN2RCxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTtRQUNoRSxPQUFNO0tBQ1A7SUFFRCxNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMxRCxNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUUxRCxNQUFNLGVBQWUsR0FBRyxNQUNaLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLEVBQUU7UUFDdEQsU0FBUyxFQUFFLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0tBQzFGLENBQ0QsQ0FBQTtJQUVGLE1BQU0sZUFBZSxHQUFHLE1BQ1osWUFBWSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRTtRQUN0RCxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7S0FDMUYsQ0FDRCxDQUFBO0lBRUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7UUFDM0IsTUFBTSxZQUFZLENBQUMsNkJBQTZCLENBQzlDLEtBQUssRUFDTCxHQUFHLGtDQUNFLGVBQWUsS0FBRSxTQUFTLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUMzRCxNQUFNLENBQ1AsQ0FBQTtLQUNGO0lBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7UUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7UUFDaEUsT0FBTTtLQUNQO0lBRUQsMkJBQTJCO0lBQzNCLE1BQU0sZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUU1RSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7UUFDMUIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQyxJQUFJLFFBQVEsRUFBRTtnQkFDWixRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUE7YUFDckM7UUFDSCxDQUFDLENBQUMsQ0FBQTtLQUNIO0lBRUQsSUFBSSxlQUFlLENBQUMsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7UUFDL0MsZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQyxJQUFJLFFBQVEsRUFBRTtnQkFDWixRQUFRLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFBO2FBQ3BDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7S0FDSDtBQUNILENBQUMsQ0FBQSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMuc2VydmljZSdcclxuXHJcbi8vIDEuIFN3aXRjaCBvbiBDdXN0b21fQ2FiaW5ldHNfZ3JwIC0gc3dpdGNoIG9mZiBDb3VjaEJhcl9TdG9vbCZDaGFpcnNfZ3JwIGFuZCB2aWNlIHZlcnNhXHJcbi8vIDIuIFN3aXRjaCBvbiBQb29sX1RhYmxlX2dycCBzd2l0Y2ggb2ZmIENhcl9MaWZ0X2dycCBhbmQgdmljZSB2ZXJzYVxyXG5cclxuZXhwb3J0IGNvbnN0IHN3aXRjaE9iamVjdHMgPSBhc3luYyAoc2NlbmUsIGFwcCwgbWVudUxvZ2ljT2JqZWN0LCBhcGlVcmwpID0+IHtcclxuICBsZXQgc2hvd0Jsb2NrUmVnZXggPSAvKD86c2hvdzopKC4rKSg/OmhpZGU6KS9pXHJcbiAgbGV0IGhpZGVCbG9ja1JlZ2V4ID0gLyg/OmhpZGU6KSguKykoPzpzaG93OikvaVxyXG4gIGxldCB0b1Nob3dTY2VuZU5hbWVzQXJyID0gbWVudUxvZ2ljT2JqZWN0LnNjZW5lTmFtZVxyXG4gICAgLnJlcGxhY2UoL1xccy9nLCAnJylcclxuICAgIC5tYXRjaChzaG93QmxvY2tSZWdleClcclxuXHJcbiAgaWYgKCF0b1Nob3dTY2VuZU5hbWVzQXJyIHx8ICF0b1Nob3dTY2VuZU5hbWVzQXJyLmxlbmd0aCkge1xyXG4gICAgc2hvd0Jsb2NrUmVnZXggPSAvKD86c2hvdzopKC4rKS9pXHJcbiAgICB0b1Nob3dTY2VuZU5hbWVzQXJyID0gbWVudUxvZ2ljT2JqZWN0LnNjZW5lTmFtZVxyXG4gICAgICAucmVwbGFjZSgvXFxzL2csICcnKVxyXG4gICAgICAubWF0Y2goc2hvd0Jsb2NrUmVnZXgpXHJcbiAgfVxyXG5cclxuICBpZiAoIXRvU2hvd1NjZW5lTmFtZXNBcnIgfHwgIXRvU2hvd1NjZW5lTmFtZXNBcnIubGVuZ3RoKSB7XHJcbiAgICBjb25zb2xlLndhcm4oYE5vdGhpbmcgdG8gc2hvdyBmb3IgJHttZW51TG9naWNPYmplY3Quc2NlbmVOYW1lfWApXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGxldCB0b0hpZGVTY2VuZU5hbWVzQXJyID0gbWVudUxvZ2ljT2JqZWN0LnNjZW5lTmFtZVxyXG4gICAgLnJlcGxhY2UoL1xccy9nLCAnJylcclxuICAgIC5tYXRjaChoaWRlQmxvY2tSZWdleClcclxuXHJcbiAgaWYgKCF0b0hpZGVTY2VuZU5hbWVzQXJyIHx8ICF0b0hpZGVTY2VuZU5hbWVzQXJyLmxlbmd0aCkge1xyXG4gICAgaGlkZUJsb2NrUmVnZXggPSAvKD86aGlkZTopKC4rKS9pXHJcbiAgICB0b0hpZGVTY2VuZU5hbWVzQXJyID0gbWVudUxvZ2ljT2JqZWN0LnNjZW5lTmFtZVxyXG4gICAgICAucmVwbGFjZSgvXFxzL2csICcnKVxyXG4gICAgICAubWF0Y2goaGlkZUJsb2NrUmVnZXgpXHJcbiAgfVxyXG5cclxuICBpZiAoIXRvSGlkZVNjZW5lTmFtZXNBcnIgfHwgIXRvSGlkZVNjZW5lTmFtZXNBcnIubGVuZ3RoKSB7XHJcbiAgICBjb25zb2xlLndhcm4oYE5vdGhpbmcgdG8gaGlkZSBmb3IgJHttZW51TG9naWNPYmplY3Quc2NlbmVOYW1lfWApXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGNvbnN0IHRvU2hvd1NjZW5lTmFtZXMgPSB0b1Nob3dTY2VuZU5hbWVzQXJyWzFdLnNwbGl0KCcsJylcclxuICBjb25zdCB0b0hpZGVTY2VuZU5hbWVzID0gdG9IaWRlU2NlbmVOYW1lc0FyclsxXS5zcGxpdCgnLCcpXHJcblxyXG4gIGNvbnN0IHRvU2hvd09iamVjdDNkcyA9IGF3YWl0ICg8YW55W10+KFxyXG4gICAgKDx1bmtub3duPlV0aWxzU2VydmljZS5nZXRPYmplY3RzQnlFbnRpdHlJblNjZW5lKHNjZW5lLCB7XHJcbiAgICAgIHNjZW5lTmFtZTogdG9TaG93U2NlbmVOYW1lcy5sZW5ndGggPiAxID8gdG9TaG93U2NlbmVOYW1lcy5qb2luKCcsJykgOiB0b1Nob3dTY2VuZU5hbWVzWzBdXHJcbiAgICB9KSlcclxuICApKVxyXG5cclxuICBjb25zdCB0b0hpZGVPYmplY3QzZHMgPSBhd2FpdCAoPGFueVtdPihcclxuICAgICg8dW5rbm93bj5VdGlsc1NlcnZpY2UuZ2V0T2JqZWN0c0J5RW50aXR5SW5TY2VuZShzY2VuZSwge1xyXG4gICAgICBzY2VuZU5hbWU6IHRvSGlkZVNjZW5lTmFtZXMubGVuZ3RoID4gMSA/IHRvSGlkZVNjZW5lTmFtZXMuam9pbignLCcpIDogdG9IaWRlU2NlbmVOYW1lc1swXVxyXG4gICAgfSkpXHJcbiAgKSlcclxuXHJcbiAgaWYgKCF0b1Nob3dPYmplY3QzZHMubGVuZ3RoKSB7XHJcbiAgICBhd2FpdCBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0c0J5RW50aXR5SW5Gcm9tQXNzZXQoXHJcbiAgICAgIHNjZW5lLFxyXG4gICAgICBhcHAsXHJcbiAgICAgIHsgLi4ubWVudUxvZ2ljT2JqZWN0LCBzY2VuZU5hbWU6IHRvU2hvd1NjZW5lTmFtZXMuam9pbignLCcpIH0sXHJcbiAgICAgIGFwaVVybFxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBpZiAoIXRvU2hvd09iamVjdDNkcy5sZW5ndGgpIHtcclxuICAgIGNvbnNvbGUud2FybihgTm90aGluZyB0byBzaG93IGZvciAke21lbnVMb2dpY09iamVjdC5zY2VuZU5hbWV9YClcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBcclxuICAvLyBjdXJyZW50bHkgdmlzaWJsZSBvciBub3RcclxuICBjb25zdCBjdXJyZW50bHlWaXNpYmxlID0gdG9TaG93T2JqZWN0M2RzLmV2ZXJ5KG9iamVjdDNkID0+IG9iamVjdDNkLnZpc2libGUpXHJcblxyXG4gIGlmICh0b1Nob3dPYmplY3QzZHMubGVuZ3RoKSB7XHJcbiAgICB0b1Nob3dPYmplY3QzZHMuZm9yRWFjaChvYmplY3QzZCA9PiB7XHJcbiAgICAgIGlmIChvYmplY3QzZCkge1xyXG4gICAgICAgIG9iamVjdDNkLnZpc2libGUgPSAhY3VycmVudGx5VmlzaWJsZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaWYgKHRvSGlkZU9iamVjdDNkcy5sZW5ndGggJiYgIWN1cnJlbnRseVZpc2libGUpIHtcclxuICAgIHRvSGlkZU9iamVjdDNkcy5mb3JFYWNoKG9iamVjdDNkID0+IHtcclxuICAgICAgaWYgKG9iamVjdDNkKSB7XHJcbiAgICAgICAgb2JqZWN0M2QudmlzaWJsZSA9IGN1cnJlbnRseVZpc2libGVcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19