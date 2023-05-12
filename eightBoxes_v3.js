/********************** 
 * Eightboxes_V3 Test *
 **********************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'eightBoxes_v3';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'Max number of trials': [5, 8], 'Audio': ['Yes', 'No'], 'Debug': ['No', 'Yes']};

// Start code blocks for 'Before Experiment'

function make_button(name, text, pos, size) {
    return new visual.ButtonStim({"win": psychoJS.window, "text": text, "pos": pos, "letterHeight": 0.04, "size": size, "borderWidth": 0.005, "fillColor": "lightgrey", "borderColor": "darkgrey", "color": "black", "colorSpace": "rgb", "opacity": null, "bold": true, "italic": false, "padding": null, "anchor": "center", "name": name});
}

function make_sound(name, filepath) {
    return new sound.Sound({"win": psychoJS.window, "value": filepath, "secs": (- 1), "stereo": true, "hamming": true, "name": name});
}

function make_img(name, file_name, pos, size, opacity) {
    return new visual.ImageStim({"win": psychoJS.window, "name": name, "image": file_name, "pos": pos, "size": size, "opacity": opacity});
}

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
    {'name': 'resources/seqs/conditions_v3.csv', 'path': 'resources/seqs/conditions_v3.csv'},
    {'name': 'resources/aud/8 boxes Trials 1-8 Recall.m4a', 'path': 'resources/aud/8 boxes Trials 1-8 Recall.m4a'},
    {'name': 'resources/imgs/banana.png', 'path': 'resources/imgs/banana.png'},
    {'name': 'resources/imgs/apple.png', 'path': 'resources/imgs/apple.png'},
    {'name': 'resources/imgs/pineapple.png', 'path': 'resources/imgs/pineapple.png'},
    {'name': 'resources/imgs/strawberry.png', 'path': 'resources/imgs/strawberry.png'},
    {'name': 'resources/aud/8 boxes Slide 2.m4a', 'path': 'resources/aud/8 boxes Slide 2.m4a'},
    {'name': 'resources/aud/8 boxes Slide 3_Trimmed.m4a', 'path': 'resources/aud/8 boxes Slide 3_Trimmed.m4a'},
    {'name': 'resources/aud/8 boxes Slide 4.m4a', 'path': 'resources/aud/8 boxes Slide 4.m4a'},
    {'name': 'resources/imgs/cherries.png', 'path': 'resources/imgs/cherries.png'},
    {'name': 'resources/imgs/continue.png', 'path': 'resources/imgs/continue.png'},
    {'name': 'resources/imgs/empty-box.png', 'path': 'resources/imgs/empty-box.png'},
    {'name': 'resources/imgs/box.png', 'path': 'resources/imgs/box.png'},
    {'name': 'resources/imgs/grapes.png', 'path': 'resources/imgs/grapes.png'},
    {'name': 'resources/aud/8 boxes End of Game.m4a', 'path': 'resources/aud/8 boxes End of Game.m4a'},
    {'name': 'resources/imgs/watermelon.png', 'path': 'resources/imgs/watermelon.png'},
    {'name': 'resources/aud/8 boxes Slide 1.m4a', 'path': 'resources/aud/8 boxes Slide 1.m4a'},
    {'name': 'resources/aud/8 boxes Slide 3.m4a', 'path': 'resources/aud/8 boxes Slide 3.m4a'},
    {'name': 'resources/imgs/orange.png', 'path': 'resources/imgs/orange.png'}
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
var AUD_DIR;
var IMGS_DIR;
var SLIDES_DIR;
var SEQ_FILE;
var SHOW_DEBUG;
var USE_AUDIO;
var SKIP_PART_1;
var RANDOMIZE_FRUITS;
var RANDOMIZE_POSITIONS;
var MIN_DIST_SQ;
var NEXT_POS;
var NEXT_SIZE;
var NEXT;
var MOUSE;
var MOUSE_L;
var MOUSE_L_prev;
var SOUND;
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
var begin_inst_3;
var begin_text;
var begin2Clock;
var begin2_inst;
var begin2_text;
var gateClock;
var gate_title;
var gate_text;
var part1Clock;
var part2Clock;
var part2_title;
var part2_text;
var globalClock;
var routineTimer;
var MAX_TRIALS;
var selected_rows;
async function experimentInit() {
  // Initialize components for Routine "begin"
  beginClock = new util.Clock();
  expVersion = "2022.09.23";
  AUD_DIR = "resources/aud";
  IMGS_DIR = "resources/imgs";
  SLIDES_DIR = `${IMGS_DIR}/slides`;
  SEQ_FILE = "resources/seqs/conditions_v3.csv";
  MAX_TRIALS = Number.parseInt(expInfo["Max number of trials"]);
  SHOW_DEBUG = (expInfo["Debug"] === "Yes");
  USE_AUDIO = (expInfo["Audio"] === "Yes");
  selected_rows = `0:${MAX_TRIALS + 1}`;
  SKIP_PART_1 = true;
  RANDOMIZE_FRUITS = true;
  RANDOMIZE_POSITIONS = false;
  MIN_DIST_SQ = (0.005 * 0.005);
  NEXT_POS = [0, (- 0.39)];
  NEXT_SIZE = [((0.1 / 104) * 254), 0.1];
  NEXT = make_img("continue", `${IMGS_DIR}/continue.png`, NEXT_POS, NEXT_SIZE);
  MOUSE = new core.Mouse({"win": psychoJS.window});
  MOUSE_L = 0;
  MOUSE_L_prev = 0;
  SOUND = null;
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
  
  begin_inst_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_inst_3',
    text: '1st Practice! \nRemember the place of the fruit!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  begin_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "begin2"
  begin2Clock = new util.Clock();
  begin2_inst = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin2_inst',
    text: 'Put the fruits back in their original boxes!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  begin2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin2_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "gate"
  gateClock = new util.Clock();
  gate_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'gate_title',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  gate_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'gate_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "part1"
  part1Clock = new util.Clock();
  // Initialize components for Routine "part2"
  part2Clock = new util.Clock();
  part2_title = new visual.TextStim({
    win: psychoJS.window,
    name: 'part2_title',
    text: 'Put the fruits back in their original boxes',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  part2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'part2_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
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
var aud_file;
var SOUND_DUR;
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
    NEXT.autoDraw = true;
    fruit1 = fruit_basket[0];
    fruit1.pos = BOXES_XY[0];
    fruit1.autoDraw = true;
    fruit2 = fruit_basket[1];
    fruit2.pos = BOXES_XY[7];
    fruit2.autoDraw = true;
    if (USE_AUDIO) {
        aud_file = `${AUD_DIR}/8 boxes Slide 1.m4a`;
        SOUND = make_sound("slide1", aud_file);
        SOUND_DUR = SOUND.getDuration();
        SOUND.play();
    }
    
    // keep track of which components have finished
    beginComponents = [];
    beginComponents.push(begin_inst_3);
    beginComponents.push(begin_text);
    
    for (const thisComponent of beginComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function beginRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin'-------
    // get current time
    t = beginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    MOUSE_L = MOUSE.getPressed()[0];
    if ((MOUSE_L_prev !== MOUSE_L)) {
        MOUSE_L_prev = MOUSE_L;
        if ((MOUSE_L && NEXT.contains(MOUSE))) {
            continueRoutine = false;
        }
    }
    if (SHOW_DEBUG) {
        begin_text.text = `
    SOUND_DUR = ${round(SOUND_DUR, 3)}
    t = ${round(t, 3)}
    selected_rows = ${selected_rows}`
    ;
    }
    
    
    // *begin_inst_3* updates
    if (t >= 0.0 && begin_inst_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_inst_3.tStart = t;  // (not accounting for frame time here)
      begin_inst_3.frameNStart = frameN;  // exact frame index
      
      begin_inst_3.setAutoDraw(true);
    }

    
    // *begin_text* updates
    if (t >= 0.0 && begin_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_text.tStart = t;  // (not accounting for frame time here)
      begin_text.frameNStart = frameN;  // exact frame index
      
      begin_text.setAutoDraw(true);
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
    for (const thisComponent of beginComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of beginComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    NEXT.autoDraw = false;
    if (USE_AUDIO) {
        SOUND.stop();
    }
    
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
    NEXT.autoDraw = true;
    if (USE_AUDIO) {
        aud_file = `${AUD_DIR}/8 boxes Slide 2.m4a`;
        SOUND = make_sound("slide2", aud_file);
        SOUND_DUR = SOUND.getDuration();
        SOUND.play();
    }
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
    
    // keep track of which components have finished
    begin2Components = [];
    begin2Components.push(begin2_inst);
    begin2Components.push(begin2_text);
    
    for (const thisComponent of begin2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    MOUSE_L = MOUSE.getPressed()[0];
    if ((MOUSE_L_prev !== MOUSE_L)) {
        MOUSE_L_prev = MOUSE_L;
        if ((MOUSE_L && NEXT.contains(MOUSE))) {
            continueRoutine = false;
        }
    }
    if (SHOW_DEBUG) {
        begin2_text.text = `
    SOUND_DUR = ${round(SOUND_DUR, 3)}
    t = ${round(t, 3)}`
    ;
    }
    
    
    // *begin2_inst* updates
    if (t >= 0.0 && begin2_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin2_inst.tStart = t;  // (not accounting for frame time here)
      begin2_inst.frameNStart = frameN;  // exact frame index
      
      begin2_inst.setAutoDraw(true);
    }

    
    // *begin2_text* updates
    if (t >= 0.0 && begin2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin2_text.tStart = t;  // (not accounting for frame time here)
      begin2_text.frameNStart = frameN;  // exact frame index
      
      begin2_text.setAutoDraw(true);
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
    for (const thisComponent of begin2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of begin2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    NEXT.autoDraw = false;
    fruit1.autoDraw = false;
    fruit2.autoDraw = false;
    if (USE_AUDIO) {
        SOUND.stop();
    }
    
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
      trialList: TrialHandler.importConditions(psychoJS.serverManager, SEQ_FILE, selected_rows),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
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
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var within_reveal_time;
var objs;
var correct_choices;
var box_idxs;
var idxs;
var found_fruits;
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
    within_reveal_time = true;
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
        if ((trial_name === "Practice trial")) {
            objs[idxs[i]].autoDraw = true;
        }
    }
    found_fruits = [];
    if ((trial_name === "Practice trial")) {
        NEXT.opacity = 0.1;
        NEXT.autoDraw = true;
    }
    if (USE_AUDIO) {
        if ((trial_name === "Practice trial")) {
            aud_file = `${AUD_DIR}/8 boxes Slide 3_Trimmed.m4a`;
        } else {
            aud_file = `${AUD_DIR}/8 boxes Trials 1-8 Recall.m4a`;
        }
        SOUND = make_sound("slide3", aud_file);
        SOUND_DUR = SOUND.getDuration();
        SOUND.play();
    }
    
    gate_title.setText(trial_name);
    // keep track of which components have finished
    gateComponents = [];
    gateComponents.push(gate_title);
    gateComponents.push(gate_text);
    
    for (const thisComponent of gateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var disappear_time_point;
var fruit_pos;
var found_count;
function gateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'gate'-------
    // get current time
    t = gateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((trial_name !== "Practice trial") && (t >= SOUND_DUR))) {
        for (var i, _pj_c = 0, _pj_a = util.range(n_fruits), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            objs[idxs[i]] = fruit_basket[i];
            objs[idxs[i]].autoDraw = true;
        }
    }
    disappear_time_point = reveal_seconds;
    if ((trial_name !== "Practice trial")) {
        disappear_time_point = (SOUND_DUR + reveal_seconds);
    }
    if ((within_reveal_time && (t > disappear_time_point))) {
        within_reveal_time = false;
        NEXT.opacity = 1;
        for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            obj = _pj_a[_pj_c];
            if ((obj !== null)) {
                obj.autoDraw = false;
            }
        }
        if (SKIP_PART_1) {
            for (var obj, _pj_c = 0, _pj_a = objs, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                obj = _pj_a[_pj_c];
                if ((obj !== null)) {
                    found_fruits.push(obj);
                }
            }
            fruit_pos = ABOVE_BOXES_XY;
            found_count = 0;
            util.shuffle(found_fruits);
            for (var found_fruit, _pj_c = 0, _pj_a = found_fruits, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                found_fruit = _pj_a[_pj_c];
                found_fruit.pos = fruit_pos[found_count];
                found_fruit.autoDraw = true;
                found_count += 1;
            }
        }
        if ((trial_name !== "Practice trial")) {
            continueRoutine = false;
        }
    }
    if ((! within_reveal_time)) {
        MOUSE_L = MOUSE.getPressed()[0];
        if ((MOUSE_L_prev !== MOUSE_L)) {
            MOUSE_L_prev = MOUSE_L;
            if ((MOUSE_L && NEXT.contains(MOUSE))) {
                continueRoutine = false;
            }
        }
    }
    if (SHOW_DEBUG) {
        gate_text.text = `
    SOUND_DUR = ${round(SOUND_DUR, 3)}
    t = ${round(t, 3)}`
    ;
    }
    
    
    // *gate_title* updates
    if (t >= 0.0 && gate_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gate_title.tStart = t;  // (not accounting for frame time here)
      gate_title.frameNStart = frameN;  // exact frame index
      
      gate_title.setAutoDraw(true);
    }

    
    // *gate_text* updates
    if (t >= 0.0 && gate_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gate_text.tStart = t;  // (not accounting for frame time here)
      gate_text.frameNStart = frameN;  // exact frame index
      
      gate_text.setAutoDraw(true);
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
    for (const thisComponent of gateComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of gateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    NEXT.autoDraw = false;
    if ((USE_AUDIO && (trial_name === "Practice trial"))) {
        SOUND.stop();
    }
    
    // the Routine "gate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


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
    // keep track of which components have finished
    part1Components = [];
    
    for (const thisComponent of part1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function part1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'part1'-------
    // get current time
    t = part1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function part1RoutineEnd() {
  return async function () {
    //------Ending Routine 'part1'-------
    for (const thisComponent of part1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "part1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var DRAGGING;
var clicked_obj;
var clicked_obj_name;
var fruits_left;
var first_click;
var first_click_time;
var fruit_idx;
var orig_pos;
var choices;
var x;
var y;
var coords_x;
var coords_y;
var coords_t;
var coords_objname;
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
    clicked_obj_name = "_";
    fruits_left = n_fruits;
    first_click = true;
    first_click_time = 0;
    fruit_idx = null;
    orig_pos = [];
    for (var found_fruit, _pj_c = 0, _pj_a = found_fruits, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        found_fruit = _pj_a[_pj_c];
        orig_pos.push(found_fruit.pos);
    }
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
    coords_objname = [];
    NEXT.opacity = 0.1;
    NEXT.autoDraw = true;
    if ((USE_AUDIO && (trial_name === "Practice trial"))) {
        aud_file = `${AUD_DIR}/8 boxes Slide 4.m4a`;
        SOUND = make_sound("slide4", aud_file);
        SOUND_DUR = SOUND.getDuration();
        SOUND.play();
    }
    
    // keep track of which components have finished
    part2Components = [];
    part2Components.push(part2_title);
    part2Components.push(part2_text);
    
    for (const thisComponent of part2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    MOUSE_L = MOUSE.getPressed()[0];
    if ((MOUSE_L_prev !== MOUSE_L)) {
        MOUSE_L_prev = MOUSE_L;
        if (((MOUSE_L && (fruits_left < 1)) && NEXT.contains(MOUSE))) {
            continueRoutine = false;
        }
    }
    if ((! DRAGGING)) {
        for (var i, _pj_c = 0, _pj_a = util.range(found_fruits.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            i = _pj_a[_pj_c];
            if (MOUSE.isPressedIn(found_fruits[i])) {
                if (first_click) {
                    first_click_time = t;
                    first_click = false;
                }
                clicked_obj = found_fruits[i];
                clicked_obj_name = clicked_obj.name;
                fruit_idx = i;
                for (var j, _pj_f = 0, _pj_d = util.range(N_BOXES), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                    j = _pj_d[_pj_f];
                    if ((choices[j] === clicked_obj.name)) {
                        choices[j] = null;
                        fruits_left += 1;
                        if ((fruits_left > 0)) {
                            NEXT.opacity = 0.1;
                        }
                        break;
                    }
                }
                DRAGGING = true;
            }
        }
    }
    if (MOUSE_L) {
        if (DRAGGING) {
            clicked_obj.pos = MOUSE.getPos();
            [x, y] = clicked_obj.pos;
            if (((coords_x.length === 0) || (dist_sq(coords_x.slice((- 1))[0], coords_y.slice((- 1))[0], x, y) > MIN_DIST_SQ))) {
                coords_x.push(round_dp(x));
                coords_y.push(round_dp(y));
                coords_t.push(round_dp(t));
                coords_objname.push(clicked_obj_name);
            }
        }
    } else {
        DRAGGING = false;
        if ((clicked_obj !== null)) {
            for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                if (snapped(clicked_obj, boxes[i])) {
                    if ((choices[i] === null)) {
                        choices[i] = clicked_obj.name;
                        fruits_left -= 1;
                        if ((fruits_left < 1)) {
                            NEXT.opacity = 1;
                        }
                    } else {
                        clicked_obj.pos = orig_pos[fruit_idx];
                    }
                    break;
                }
            }
            clicked_obj = null;
            clicked_obj_name = "_";
        }
    }
    if (SHOW_DEBUG) {
        part2_text.text = `
    time_since_start = ${round(time_since_start, 3)}
    time_since_first_click = ${round(time_since_first_click, 3)}
    fruits_left = ${fruits_left}
    choices = ${choices}
    clicked_obj_name = ${clicked_obj_name}
    fruit_idx = ${fruit_idx}
    SOUND_DUR = ${round(SOUND_DUR, 3)}
    t = ${round(t, 3)}`
    ;
    }
    
    
    // *part2_title* updates
    if (t >= 0.0 && part2_title.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      part2_title.tStart = t;  // (not accounting for frame time here)
      part2_title.frameNStart = frameN;  // exact frame index
      
      part2_title.setAutoDraw(true);
    }

    
    // *part2_text* updates
    if (t >= 0.0 && part2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      part2_text.tStart = t;  // (not accounting for frame time here)
      part2_text.frameNStart = frameN;  // exact frame index
      
      part2_text.setAutoDraw(true);
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
    for (const thisComponent of part2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var score;
var errors;
function part2RoutineEnd() {
  return async function () {
    //------Ending Routine 'part2'-------
    for (const thisComponent of part2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    NEXT.autoDraw = false;
    for (var found_fruit, _pj_c = 0, _pj_a = found_fruits, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        found_fruit = _pj_a[_pj_c];
        found_fruit.autoDraw = false;
    }
    if ((USE_AUDIO && (trial_name === "Practice trial"))) {
        SOUND.stop();
    }
    score = 0;
    errors = 0;
    for (var i, _pj_c = 0, _pj_a = util.range(N_BOXES), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((choices[i] === null)) {
            choices[i] = "-";
        }
        if ((correct_choices[i] === null)) {
            correct_choices[i] = "-";
        }
        if ((choices[i] !== correct_choices[i])) {
            errors += 1;
        } else {
            if ((correct_choices[i] !== "-")) {
                score += 1;
            }
        }
    }
    psychoJS.experiment.addData("choices", choices);
    psychoJS.experiment.addData("correct_choices", correct_choices);
    psychoJS.experiment.addData("score", score);
    psychoJS.experiment.addData("errors", errors);
    psychoJS.experiment.addData("time_since_start", time_since_start);
    psychoJS.experiment.addData("time_since_first_click", time_since_first_click);
    psychoJS.experiment.addData("end_timestamp", util.MonotonicClock.getDateStr());
    psychoJS.experiment.addData("total_seconds", globalClock.getTime());
    psychoJS.experiment.addData("coords_x", coords_x);
    psychoJS.experiment.addData("coords_y", coords_y);
    psychoJS.experiment.addData("coords_t", coords_t);
    psychoJS.experiment.addData("coords_objname", coords_objname);
    
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
  
  
  
  if (USE_AUDIO) {
      aud_file = `${AUD_DIR}/8 boxes End of Game.m4a`;
      SOUND = make_sound("end", aud_file);
      SOUND.play();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
