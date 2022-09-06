/********************** 
 * Eightboxes_V3 Test *
 **********************/


// store info about the experiment session:
let expName = 'eightBoxes_v3';  // from the Builder filename that created this script
let expInfo = {'ID': '', 'Audio': ['Yes', 'No'], 'Debug': ['Yes', 'No']};

// Start code blocks for 'Before Experiment'

function within_box(obj, box) {
    /*
    Determine if object is within box
    - Squared difference in x (and y) coordinates
    should be less than the square of half the
    box width (and height)
    - That would mean the center of the object is
    within the box boundaries
    */
    var box_h, box_w, box_x, box_y, dx, dy, hh, hw, obj_x, obj_y;
    [obj_x, obj_y] = obj.pos;
    [box_x, box_y] = box.pos;
    [box_w, box_h] = box.size;
    [dx, dy] = [(obj_x - box_x), (obj_y - box_y)];
    [hw, hh] = [(box_w / 2), (box_h / 2)];
    return (((dx * dx) < (hw * hw)) && ((dy * dy) < (hh * hh)));
}

function snapped(obj1, obj2, func = within_box) {
    /*
    Determine if obj1 snapped to center of obj2
    - Check if obj1 is 'near' obj2, based on func
    - If yes, set the obj1's position to be
    equal to obj2's position and return True
    - Otherwise, do nothing and return False
    */
    if (func(obj1, obj2)) {
        obj1.pos = obj2.pos;
        return true;
    }
    return false;
}

function dist_sq(x1, y1, x2, y2) {
    var dx, dy;
    [dx, dy] = [(x2 - x1), (y2 - y1)];
    return ((dx * dx) + (dy * dy));
}

function round_dp(x, dp = 5) {
    var num;
    [num] = [Math.pow(10, dp)];
    return (Math.round((x * num)) / num);
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(beginRoutineBegin());
flowScheduler.add(beginRoutineEachFrame());
flowScheduler.add(beginRoutineEnd());
flowScheduler.add(begin2RoutineBegin());
flowScheduler.add(begin2RoutineEachFrame());
flowScheduler.add(begin2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'resources/imgs/cherries.png', 'path': 'resources/imgs/cherries.png'},
    {'name': 'resources/aud/8boxes.mp3', 'path': 'resources/aud/8boxes.mp3'},
    {'name': 'resources/imgs/grapes.png', 'path': 'resources/imgs/grapes.png'},
    {'name': 'resources/imgs/watermelon.png', 'path': 'resources/imgs/watermelon.png'},
    {'name': 'resources/imgs/orange.png', 'path': 'resources/imgs/orange.png'},
    {'name': 'resources/imgs/strawberry.png', 'path': 'resources/imgs/strawberry.png'},
    {'name': 'resources/imgs/box.png', 'path': 'resources/imgs/box.png'},
    {'name': 'resources/imgs/empty-box.png', 'path': 'resources/imgs/empty-box.png'},
    {'name': 'resources/imgs/banana.png', 'path': 'resources/imgs/banana.png'},
    {'name': 'resources/imgs/continue.png', 'path': 'resources/imgs/continue.png'},
    {'name': 'resources/imgs/pineapple.png', 'path': 'resources/imgs/pineapple.png'},
    {'name': 'resources/imgs/apple.png', 'path': 'resources/imgs/apple.png'},
    {'name': 'resources/conditions_v3.csv', 'path': 'resources/conditions_v3.csv'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var beginClock;
var expVersion;
var SHOW_DEBUG;
var USE_AUDIO;
var SKIP_PART_1;
var RANDOMIZE_FRUITS;
var RANDOMIZE_POSITIONS;
var MIN_DIST_SQ;
var IMG_NAMES;
var N_FRUITS;
var N_BOXES;
var NCOL;
var BOX_SIZE;
var OBJ_SIZE;
var CONT_BUTTON_SIZE;
var ABOVE_BOXES_X0;
var ABOVE_BOXES_Y0;
var ABOVE_BOXES_XY;
var BOXES_X0;
var BOXES_Y0;
var BOXES_XY;
var boxes;
var fruit_basket;
var beginInst3;
var beginCont;
var beginMouse;
var beginDebug;
var begin2Clock;
var begin2Inst;
var begin2Cont;
var begin2Mouse;
var gateClock;
var gateText;
var part1Clock;
var text1;
var mouse1;
var part2Clock;
var text2;
var mouse2;
var cont2;
var debug2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin"
  beginClock = new util.Clock();
  expVersion = "2022.09.06";
  SHOW_DEBUG = (expInfo["Debug"] === "Yes");
  USE_AUDIO = (expInfo["Audio"] === "Yes");
  SKIP_PART_1 = true;
  RANDOMIZE_FRUITS = true;
  RANDOMIZE_POSITIONS = false;
  MIN_DIST_SQ = (0.005 * 0.005);
  IMG_NAMES = ["apple", "banana", "cherries", "grapes", "orange", "strawberry", "watermelon"];
  N_FRUITS = IMG_NAMES.length;
  N_BOXES = 8;
  NCOL = 4;
  BOX_SIZE = [0.2, 0.2];
  OBJ_SIZE = [0.16, 0.16];
  CONT_BUTTON_SIZE = [0.32, 0.112];
  ABOVE_BOXES_X0 = (- 0.4);
  ABOVE_BOXES_Y0 = 0.2;
  ABOVE_BOXES_XY = [];
  for (var i, _pj_c = 0, _pj_a = util.range(N_FRUITS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      ABOVE_BOXES_XY.push([(ABOVE_BOXES_X0 + (i * OBJ_SIZE[1])), ABOVE_BOXES_Y0]);
  }
  BOXES_X0 = (- 0.3);
  BOXES_Y0 = 0;
  BOXES_XY = [];
  for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      BOXES_XY.push([(BOXES_X0 + ((i % NCOL) * BOX_SIZE[0])), (BOXES_Y0 - (Number.parseInt((i / NCOL)) * BOX_SIZE[1]))]);
  }
  boxes = [];
  for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      boxes.push(new visual.ImageStim({"win": psychoJS.window, "name": `box${(i + 1)}`, "image": "resources/imgs/box.png", "pos": BOXES_XY[i], "size": BOX_SIZE, "opacity": 0.5}));
  }
  fruit_basket = [];
  for (var i, _pj_c = 0, _pj_a = util.range(N_FRUITS), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      fruit_basket.push(new visual.ImageStim({"win": psychoJS.window, "name": IMG_NAMES[i], "image": `resources/imgs/${IMG_NAMES[i]}.png`, "pos": [0, 0], "size": OBJ_SIZE}));
  }
  
  beginInst3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'beginInst3',
    text: '1st Practice! \nRemember the place of the fruit!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  beginCont = new visual.ImageStim({
    win : psychoJS.window,
    name : 'beginCont', units : 'height', 
    image : 'resources/imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0.32, 0.112],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  beginMouse = new core.Mouse({
    win: psychoJS.window,
  });
  beginMouse.mouseClock = new util.Clock();
  beginDebug = new visual.TextStim({
    win: psychoJS.window,
    name: 'beginDebug',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "begin2"
  begin2Clock = new util.Clock();
  begin2Inst = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin2Inst',
    text: 'Put the fruits back in their original boxes!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  begin2Cont = new visual.ImageStim({
    win : psychoJS.window,
    name : 'begin2Cont', units : 'height', 
    image : 'resources/imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0.32, 0.112],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  begin2Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  begin2Mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "gate"
  gateClock = new util.Clock();
  gateText = new visual.TextStim({
    win: psychoJS.window,
    name: 'gateText',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "part1"
  part1Clock = new util.Clock();
  text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: 'Find the fruits',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse1.mouseClock = new util.Clock();
  // Initialize components for Routine "part2"
  part2Clock = new util.Clock();
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: 'Put the fruits back in their original boxes',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse2.mouseClock = new util.Clock();
  cont2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cont2', units : undefined, 
    image : 'resources/imgs/continue.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.4)], size : [0, 0],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  debug2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'debug2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0.37], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var fruit1;
var fruit2;
var beginSound;
var gotValidClick;
var beginComponents;
function beginRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin'-------
    t = 0;
    beginClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        boxes[i].autoDraw = true;
    }
    fruit1 = fruit_basket[0];
    fruit1.pos = BOXES_XY[0];
    fruit1.autoDraw = true;
    fruit2 = fruit_basket[1];
    fruit2.pos = BOXES_XY[7];
    fruit2.autoDraw = true;
    if (USE_AUDIO) {
        beginSound = new sound.Sound({"win": psychoJS.window, "value": "resources/aud/8boxes.mp3", "secs": (- 1), "stereo": true, "hamming": true, "name": "beginSound"});
        beginSound.setVolume(1.0);
        beginSound.play();
    }
    
    // setup some python lists for storing info about the beginMouse
    beginMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    beginComponents = [];
    beginComponents.push(beginInst3);
    beginComponents.push(beginCont);
    beginComponents.push(beginMouse);
    beginComponents.push(beginDebug);
    
    beginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function beginRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin'-------
    // get current time
    t = beginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((USE_AUDIO && (t > 12.5))) {
        continueRoutine = false;
    }
    if (SHOW_DEBUG) {
        beginDebug.text = `
    util.MonotonicClock.getDateStr() = ${util.MonotonicClock.getDateStr()}
    t = ${round(t, 3)}`
    ;
    }
    
    
    // *beginInst3* updates
    if (t >= 0.0 && beginInst3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beginInst3.tStart = t;  // (not accounting for frame time here)
      beginInst3.frameNStart = frameN;  // exact frame index
      
      beginInst3.setAutoDraw(true);
    }

    
    // *beginCont* updates
    if (t >= 0.0 && beginCont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beginCont.tStart = t;  // (not accounting for frame time here)
      beginCont.frameNStart = frameN;  // exact frame index
      
      beginCont.setAutoDraw(true);
    }

    // *beginMouse* updates
    if (t >= 0.0 && beginMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beginMouse.tStart = t;  // (not accounting for frame time here)
      beginMouse.frameNStart = frameN;  // exact frame index
      
      beginMouse.status = PsychoJS.Status.STARTED;
      beginMouse.mouseClock.reset();
      prevButtonState = beginMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (beginMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = beginMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [beginCont]) {
            if (obj.contains(beginMouse)) {
              gotValidClick = true;
              beginMouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *beginDebug* updates
    if (t >= 0.0 && beginDebug.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beginDebug.tStart = t;  // (not accounting for frame time here)
      beginDebug.frameNStart = frameN;  // exact frame index
      
      beginDebug.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    beginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beginRoutineEnd() {
  return async function () {
    //------Ending Routine 'begin'-------
    beginComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "begin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var N_FRAMES;
var HN_FRAMES;
var fruit1_start;
var fruit1_end;
var fruit2_start;
var fruit2_end;
var xx1;
var yy1;
var xx2;
var yy2;
var idx;
var begin2Components;
function begin2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin2'-------
    t = 0;
    begin2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    N_FRAMES = Number.parseInt((1 / frameDur));
    HN_FRAMES = Number.parseInt((N_FRAMES / 2));
    fruit1_start = ABOVE_BOXES_XY[0];
    fruit1_end = fruit1.pos;
    fruit2_start = ABOVE_BOXES_XY[1];
    fruit2_end = fruit2.pos;
    xx1 = [];
    yy1 = [];
    xx2 = [];
    yy2 = [];
    for (var i, _pj_c = 0, _pj_a = util.range(HN_FRAMES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        xx1.push((fruit1_start[0] + (((fruit1_end[0] - fruit1_start[0]) / HN_FRAMES) * i)));
        yy1.push((fruit1_start[1] + (((fruit1_end[1] - fruit1_start[1]) / HN_FRAMES) * i)));
        xx2.push(fruit2_start[0]);
        yy2.push(fruit2_start[1]);
    }
    for (var i, _pj_c = 0, _pj_a = util.range(N_FRAMES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        xx1.push(fruit1_end[0]);
        yy1.push(fruit1_end[1]);
        xx2.push((fruit2_start[0] + (((fruit2_end[0] - fruit2_start[0]) / N_FRAMES) * i)));
        yy2.push((fruit2_start[1] + (((fruit2_end[1] - fruit2_start[1]) / N_FRAMES) * i)));
    }
    for (var i, _pj_c = 0, _pj_a = util.range(HN_FRAMES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        xx1.push(fruit1_end[0]);
        yy1.push(fruit1_end[1]);
        xx2.push(fruit2_end[0]);
        yy2.push(fruit2_end[1]);
    }
    idx = 0;
    
    // setup some python lists for storing info about the begin2Mouse
    begin2Mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    begin2Components = [];
    begin2Components.push(begin2Inst);
    begin2Components.push(begin2Cont);
    begin2Components.push(begin2Mouse);
    
    begin2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function begin2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin2'-------
    // get current time
    t = begin2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    idx = (frameN % ((2 * HN_FRAMES) + N_FRAMES));
    fruit1.pos = [xx1[idx], yy1[idx]];
    fruit2.pos = [xx2[idx], yy2[idx]];
    
    
    // *begin2Inst* updates
    if (t >= 0.0 && begin2Inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin2Inst.tStart = t;  // (not accounting for frame time here)
      begin2Inst.frameNStart = frameN;  // exact frame index
      
      begin2Inst.setAutoDraw(true);
    }

    
    // *begin2Cont* updates
    if (t >= 0.0 && begin2Cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin2Cont.tStart = t;  // (not accounting for frame time here)
      begin2Cont.frameNStart = frameN;  // exact frame index
      
      begin2Cont.setAutoDraw(true);
    }

    // *begin2Mouse* updates
    if (t >= 0.0 && begin2Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin2Mouse.tStart = t;  // (not accounting for frame time here)
      begin2Mouse.frameNStart = frameN;  // exact frame index
      
      begin2Mouse.status = PsychoJS.Status.STARTED;
      begin2Mouse.mouseClock.reset();
      prevButtonState = begin2Mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (begin2Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = begin2Mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [beginCont]) {
            if (obj.contains(begin2Mouse)) {
              gotValidClick = true;
              begin2Mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    begin2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function begin2RoutineEnd() {
  return async function () {
    //------Ending Routine 'begin2'-------
    begin2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    fruit1.autoDraw = false;
    fruit2.autoDraw = false;
    if (USE_AUDIO) {
        beginSound.stop();
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "begin2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'resources/conditions_v3.csv', '0:'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(gateRoutineBegin(snapshot));
      trialsLoopScheduler.add(gateRoutineEachFrame());
      trialsLoopScheduler.add(gateRoutineEnd());
      trialsLoopScheduler.add(part1RoutineBegin(snapshot));
      trialsLoopScheduler.add(part1RoutineEachFrame());
      trialsLoopScheduler.add(part1RoutineEnd());
      trialsLoopScheduler.add(part2RoutineBegin(snapshot));
      trialsLoopScheduler.add(part2RoutineEachFrame());
      trialsLoopScheduler.add(part2RoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var objs;
var correct_choices;
var box_idxs;
var idxs;
var gateComponents;
function gateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'gate'-------
    t = 0;
    gateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData("expVersion", expVersion);
    objs = [];
    correct_choices = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        boxes[i].autoDraw = true;
        objs.push(null);
        correct_choices.push(null);
    }
    if (RANDOMIZE_POSITIONS) {
        box_idxs = util.range(N_BOXES);
        util.shuffle(box_idxs);
        idxs = box_idxs;
    } else {
        idxs = [pos1, pos2, pos3, pos4, pos5, pos6];
    }
    idxs = idxs.slice(0, n_fruits);
    if (RANDOMIZE_FRUITS) {
        util.shuffle(fruit_basket);
    }
    for (var i, _pj_c = 0, _pj_a = util.range(n_fruits), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        objs[idxs[i]] = fruit_basket[i];
        objs[idxs[i]].pos = BOXES_XY[idxs[i]];
        correct_choices[idxs[i]] = fruit_basket[i].name;
        objs[idxs[i]].autoDraw = true;
    }
    
    gateText.setText(trial_name);
    // keep track of which components have finished
    gateComponents = [];
    gateComponents.push(gateText);
    
    gateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function gateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'gate'-------
    // get current time
    t = gateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *gateText* updates
    if (t >= 0.0 && gateText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gateText.tStart = t;  // (not accounting for frame time here)
      gateText.frameNStart = frameN;  // exact frame index
      
      gateText.setAutoDraw(true);
    }

    frameRemains = 0.0 + reveal_seconds - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gateText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gateText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    gateComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function gateRoutineEnd() {
  return async function () {
    //------Ending Routine 'gate'-------
    gateComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        obj = _pj_a[_pj_c];
        if ((obj !== null)) {
            obj.autoDraw = false;
        }
    }
    
    // the Routine "gate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var found_fruits;
var OBJ_DURATION;
var BLANK_DURATION;
var visible;
var visible_t;
var n_omissions;
var n_commissions;
var correct_boxes;
var clicked_boxes;
var click_times;
var first_click;
var update_time_elapsed;
var obj_count;
var task_time_start;
var task_time_elapsed;
var highlighter;
var part1Components;
function part1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'part1'-------
    t = 0;
    part1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    found_fruits = [];
    if (SKIP_PART_1) {
        for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            obj = _pj_a[_pj_c];
            if ((obj !== null)) {
                found_fruits.push(obj);
            }
        }
        continueRoutine = false;
    }
    OBJ_DURATION = 1.0;
    BLANK_DURATION = OBJ_DURATION;
    visible = [];
    visible_t = [];
    n_omissions = [];
    n_commissions = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        visible.push(false);
        visible_t.push(null);
        n_omissions.push(0);
        n_commissions.push(0);
    }
    correct_boxes = [];
    for (var i, _pj_c = 0, _pj_a = util.range(n_fruits), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        correct_boxes.push(`box${(idxs[i] + 1)}`);
        correct_choices[idxs[i]] = fruit_basket[i].name;
    }
    correct_boxes.sort();
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((objs[i] === null)) {
            objs[i] = new visual.ImageStim({"win": psychoJS.window, "name": `blank${(i + 1)}`, "image": "resources/imgs/empty-box.png", "pos": BOXES_XY[i], "size": OBJ_SIZE});
        }
    }
    clicked_boxes = [];
    click_times = [];
    first_click = true;
    update_time_elapsed = false;
    obj_count = 0;
    task_time_start = null;
    task_time_elapsed = 0.0;
    highlighter = new visual.ImageStim({"win": psychoJS.window, "name": "highlighter", "image": "resources/imgs/box.png", "pos": BOXES_XY[0], "size": BOX_SIZE, "opacity": 0.5});
    
    // setup some python lists for storing info about the mouse1
    gotValidClick = false; // until a click is received
    mouse1.mouseClock.reset();
    // keep track of which components have finished
    part1Components = [];
    part1Components.push(text1);
    part1Components.push(mouse1);
    
    part1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _pj;
function part1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'part1'-------
    // get current time
    t = part1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! SKIP_PART_1)) {
        if (update_time_elapsed) {
            task_time_elapsed = (t - task_time_start);
        }
        highlighter.setSize([0, 0], {"log": false});
        for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if (visible[i]) {
                continue;
            }
            if (mouse1.isPressedIn(boxes[i])) {
                if (first_click) {
                    task_time_start = t;
                    update_time_elapsed = true;
                    first_click = false;
                }
                if ((! _pj.in_es6("blank", objs[i].name))) {
                    obj_count += 1;
                    if ((obj_count >= n_fruits)) {
                        update_time_elapsed = false;
                    }
                } else {
                    if (_pj.in_es6("_blank", objs[i].name)) {
                        n_commissions[i] += 1;
                    } else {
                        n_omissions[i] += 1;
                    }
                }
                clicked_boxes.push(boxes[i].name);
                click_times.push(task_time_elapsed);
                objs[i].setAutoDraw(true, {"log": false});
                visible[i] = true;
                visible_t[i] = t;
                break;
            } else {
                if (boxes[i].contains(mouse1)) {
                    highlighter.setPos(boxes[i].pos, {"log": false});
                    highlighter.setSize(BOX_SIZE, {"log": false});
                    highlighter.draw();
                    break;
                }
            }
        }
        for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if ((visible[i] && ((t - visible_t[i]) >= OBJ_DURATION))) {
                objs[i].setAutoDraw(false, {"log": false});
                if ((! _pj.in_es6("blank", objs[i].name))) {
                    found_fruits.push(objs[i]);
                    objs[i] = new visual.ImageStim({"win": psychoJS.window, "name": `${objs[i].name}_blank`, "image": "imgs/empty-box.png", "pos": BOXES_XY[i], "size": OBJ_SIZE});
                }
                visible[i] = false;
            }
        }
        if (((obj_count >= n_fruits) && (util.sum(visible) <= 0))) {
            continueRoutine = false;
        }
    }
    
    
    // *text1* updates
    if (t >= 0.0 && text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text1.tStart = t;  // (not accounting for frame time here)
      text1.frameNStart = frameN;  // exact frame index
      
      text1.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    part1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var fruit_pos;
var found_count;
var total_errors;
function part1RoutineEnd() {
  return async function () {
    //------Ending Routine 'part1'-------
    part1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    fruit_pos = ABOVE_BOXES_XY;
    found_count = 0;
    util.shuffle(found_fruits);
    for (var found_fruit, _pj_c = 0, _pj_a = found_fruits, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        found_fruit = _pj_a[_pj_c];
        found_fruit.pos = fruit_pos[found_count];
        found_fruit.autoDraw = true;
        found_count += 1;
    }
    if ((! SKIP_PART_1)) {
        psychoJS.experiment.addData("clicked_boxes", clicked_boxes);
        psychoJS.experiment.addData("click_times", click_times);
        psychoJS.experiment.addData("time_taken_sec", click_times.pop());
        psychoJS.experiment.addData("correct_boxes", correct_boxes);
        psychoJS.experiment.addData("omission_errors", n_omissions);
        psychoJS.experiment.addData("commission_errors", n_commissions);
        total_errors = (util.sum(n_omissions) + util.sum(n_commissions));
        psychoJS.experiment.addData("total_errors", total_errors);
        highlighter.size = [0, 0];
    }
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "part1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var DRAGGING;
var clicked_obj;
var fruits_left;
var first_click_time;
var choices;
var x;
var y;
var coords_x;
var coords_y;
var coords_t;
var part2Components;
function part2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'part2'-------
    t = 0;
    part2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    DRAGGING = false;
    clicked_obj = null;
    fruits_left = n_fruits;
    first_click = true;
    first_click_time = 0;
    choices = [];
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        choices.push(null);
    }
    x = 0;
    y = 0;
    coords_x = [];
    coords_y = [];
    coords_t = [];
    
    // setup some python lists for storing info about the mouse2
    mouse2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    part2Components = [];
    part2Components.push(text2);
    part2Components.push(mouse2);
    part2Components.push(cont2);
    part2Components.push(debug2);
    
    part2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var time_since_start;
var time_since_first_click;
function part2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'part2'-------
    // get current time
    t = part2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((fruits_left > 0)) {
        time_since_start = t;
        time_since_first_click = (first_click ? 0 : (t - first_click_time));
    }
    if (SHOW_DEBUG) {
        debug2.text = `
    time_since_start = ${round(time_since_start, 3)}
    time_since_first_click = ${round(time_since_first_click, 3)}
    fruits_left = ${fruits_left}
    choices = ${choices}`
    ;
    }
    cont2.size = ((fruits_left < 1) ? CONT_BUTTON_SIZE : [0, 0]);
    if ((! DRAGGING)) {
        for (var found_fruit, _pj_c = 0, _pj_a = found_fruits, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            found_fruit = _pj_a[_pj_c];
            if (mouse2.isPressedIn(found_fruit)) {
                if (first_click) {
                    first_click_time = t;
                    first_click = false;
                }
                clicked_obj = found_fruit;
                for (var i, _pj_f = 0, _pj_d = util.range(N_BOXES), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                    i = _pj_d[_pj_f];
                    if ((choices[i] === clicked_obj.name)) {
                        choices[i] = null;
                        fruits_left += 1;
                        break;
                    }
                }
                DRAGGING = true;
            }
        }
    }
    if ((mouse2.getPressed()[0] === 1)) {
        if (DRAGGING) {
            clicked_obj.pos = mouse2.getPos();
            [x, y] = clicked_obj.pos;
            if (((coords_x.length === 0) || (dist_sq(coords_x.slice((- 1))[0], coords_y.slice((- 1))[0], x, y) > MIN_DIST_SQ))) {
                coords_x.push(round_dp(x));
                coords_y.push(round_dp(y));
                coords_t.push(round_dp(t));
            }
        }
    } else {
        DRAGGING = false;
        if ((clicked_obj !== null)) {
            for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                if (snapped(clicked_obj, boxes[i])) {
                    choices[i] = clicked_obj.name;
                    fruits_left -= 1;
                    clicked_obj = null;
                    break;
                }
            }
        }
    }
    
    
    // *text2* updates
    if (t >= 0.0 && text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text2.tStart = t;  // (not accounting for frame time here)
      text2.frameNStart = frameN;  // exact frame index
      
      text2.setAutoDraw(true);
    }

    // *mouse2* updates
    if (t >= 0.0 && mouse2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse2.tStart = t;  // (not accounting for frame time here)
      mouse2.frameNStart = frameN;  // exact frame index
      
      mouse2.status = PsychoJS.Status.STARTED;
      mouse2.mouseClock.reset();
      prevButtonState = mouse2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [cont2]) {
            if (obj.contains(mouse2)) {
              gotValidClick = true;
              mouse2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *cont2* updates
    if (t >= 0.0 && cont2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont2.tStart = t;  // (not accounting for frame time here)
      cont2.frameNStart = frameN;  // exact frame index
      
      cont2.setAutoDraw(true);
    }

    
    // *debug2* updates
    if (t >= 0.0 && debug2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debug2.tStart = t;  // (not accounting for frame time here)
      debug2.frameNStart = frameN;  // exact frame index
      
      debug2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    part2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var errors;
function part2RoutineEnd() {
  return async function () {
    //------Ending Routine 'part2'-------
    part2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData("time_since_start", time_since_start);
    psychoJS.experiment.addData("time_since_first_click", time_since_first_click);
    psychoJS.experiment.addData("coords_x", coords_x);
    psychoJS.experiment.addData("coords_y", coords_y);
    psychoJS.experiment.addData("coords_t", coords_t);
    psychoJS.experiment.addData("choices", choices);
    psychoJS.experiment.addData("correct_choices", correct_choices);
    errors = 0;
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((choices[i] !== correct_choices[i])) {
            errors += 1;
        }
    }
    psychoJS.experiment.addData("errors", errors);
    for (var found_fruit, _pj_c = 0, _pj_a = found_fruits, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        found_fruit = _pj_a[_pj_c];
        found_fruit.autoDraw = false;
    }
    psychoJS.experiment.addData("end_timestamp", util.MonotonicClock.getDateStr());
    psychoJS.experiment.addData("total_seconds", globalClock.getTime());
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "part2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
