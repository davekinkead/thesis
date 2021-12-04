(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
var Agent, Space, ave, fs, runSimulation, save, simulateDemocracy, stdev, sum, variance, vote;

Agent = (function() {
  function Agent(belief1) {
    this.belief = belief1;
  }

  return Agent;

})();

Space = (function() {
  function Space(profile) {
    var belief, believers, i, n, ref;
    this.agents = [];
    for (belief in profile) {
      believers = profile[belief];
      for (n = i = 1, ref = believers; 1 <= ref ? i <= ref : i >= ref; n = 1 <= ref ? ++i : --i) {
        this.agents.push(new Agent(belief));
      }
    }
  }

  return Space;

})();

Space.prototype.distribute = function(cluster) {
  var limit, quota, results1;
  if (cluster == null) {
    cluster = 0.0;
  }
  quota = this.agents;
  this.agents = [];
  results1 = [];
  while (quota.length > 0) {
    limit = Math.round(Math.random() * quota.length * (1 - cluster));
    results1.push(this.agents = this.agents.concat(quota.splice(limit, 1)));
  }
  return results1;
};

Space.prototype.partition = function(k) {
  var cut, polity;
  this.polities = [this.agents];
  while (k > 1) {
    k = Math.min(k, this.agents.length);
    polity = this.polities.shift();
    cut = Math.floor(Math.random() * (polity.length - k)) + 1;
    this.polities.push(polity.slice(0, cut));
    this.polities.push(polity.slice(cut));
    this.polities.sort(function(a, b) {
      return b.length - a.length;
    });
    k--;
  }
  return this;
};

vote = function(polity) {
  var agent, belief, i, len, max, num, votes;
  votes = {};
  for (i = 0, len = polity.length; i < len; i++) {
    agent = polity[i];
    if (votes.hasOwnProperty(agent.belief)) {
      votes[agent.belief]++;
    } else {
      votes[agent.belief] = 1;
    }
  }
  max = Math.max.apply(null, (function() {
    var results1;
    results1 = [];
    for (belief in votes) {
      num = votes[belief];
      results1.push(num);
    }
    return results1;
  })());
  for (belief in votes) {
    num = votes[belief];
    if (num === max) {
      votes.winner = belief;
    }
  }
  return votes;
};

Space.prototype.virtue = function() {
  var correctVotes, election, i, len, polity, ref;
  correctVotes = 0;
  ref = this.polities;
  for (i = 0, len = ref.length; i < len; i++) {
    polity = ref[i];
    election = vote(polity);
    if (election.winner === 'right') {
      correctVotes += 1;
    }
  }
  return correctVotes / this.polities.length;
};

Space.prototype.fidelity = function() {
  var election, i, key, len, polity, population, ref, val, winners;
  winners = 0;
  population = 0;
  ref = this.polities;
  for (i = 0, len = ref.length; i < len; i++) {
    polity = ref[i];
    election = vote(polity);
    for (key in election) {
      val = election[key];
      if (key === election.winner) {
        winners += val;
      }
      if (key !== 'winner') {
        population += val;
      }
    }
  }
  return winners / population;
};

Space.prototype.character = function() {
  var average_character_in_polity, characters, gap_closed, i, len, polity, polity_improvements, ref;
  polity_improvements = [];
  ref = this.polities;
  for (i = 0, len = ref.length; i < len; i++) {
    polity = ref[i];
    characters = polity.manipulation(function(agent) {
      var character;
      character = agent.belief === 'good' ? 0.5 : 0.0;
      return character += Math.random() / 2;
    });
    average_character_in_polity = ave(characters);
    gap_closed = ave(characters.map(function(val) {
      return (1 - val) * average_character_in_polity + val;
    }));
    polity_improvements.push(gap_closed);
  }
  return ave(polity_improvements);
};

sum = function(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
};

ave = function(arr) {
  return sum(arr) / arr.length;
};

variance = function(arr) {
  var mean;
  mean = ave(arr);
  return (arr.reduce((function(a, b) {
    return a + (mean - b) * (mean - b);
  }), 0)) / arr.length;
};

stdev = function(arr) {
  return Math.sqrt(variance(arr));
};

simulateDemocracy = function(account, agents, partitions, clustering, trials) {
  var i, ref, results, space, trial;
  space = new Space(agents);
  space.distribute(clustering);
  results = {
    'a': agents,
    'p': partitions,
    'c': clustering,
    'trials': []
  };
  for (trial = i = 1, ref = trials; 1 <= ref ? i <= ref : i >= ref; trial = 1 <= ref ? ++i : --i) {
    results.trials.push(space[account](space.partition(partitions)));
  }
  return results;
};

fs = require('fs');

save = function(name, results) {
  return fs.writeFile("assets/" + name + ".json", JSON.stringify(results), function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

runSimulation = function(name, metric, choices) {
  var b, bases, c, clusters, i, j, l, len, len1, len2, obj, obj1, p, partitions, results, sim;
  bases = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  partitions = [1, 2, 3, 4, 5, 6];
  clusters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  results = [];
  for (i = 0, len = bases.length; i < len; i++) {
    b = bases[i];
    b = 500 + b * 50;
    for (j = 0, len1 = partitions.length; j < len1; j++) {
      p = partitions[j];
      p = p * 5;
      for (l = 0, len2 = clusters.length; l < len2; l++) {
        c = clusters[l];
        c = c / 10;
        sim = simulateDemocracy(metric, (
          obj = {},
          obj["" + choices[0]] = b,
          obj["" + choices[1]] = 1000 - b,
          obj
        ), p, c, 1000);
        results.push((
          obj1 = {
            "baserate": b,
            "partitions": p,
            "clustering": c.toFixed(2)
          },
          obj1[name + " " + metric] = ave(sim.trials).toFixed(15),
          obj1
        ));
        process.stdout.write("Running " + (results.length * 1000) + " " + name + " trials\r");
      }
    }
  }
  return save(name, results);
};

process.argv.forEach(function(val, index, array) {
  if (val === 'epistemic') {
    runSimulation('epistemic', 'virtue', ['right', 'wrong']);
  }
  if (val === 'preference') {
    runSimulation('preference', 'fidelity', ['red', 'blue']);
  }
  if (val === 'character') {
    return runSimulation('moral', 'character', ['good', 'bad']);
  }
});


}).call(this,require('_process'))
},{"_process":3,"fs":2}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1]);
