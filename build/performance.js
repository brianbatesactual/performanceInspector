chrome.devtools.panels.create("Performance","./icon.png","Panel/panel.html",function(e){var n,o=chrome.devtools.inspectedWindow.tabId,r=chrome.runtime.connect({name:"performance_"+o});r.onMessage.addListener(function(e){n&&n.afterReload(e)}),e.onShown.addListener(function t(o){e.onShown.removeListener(t),n=o})});