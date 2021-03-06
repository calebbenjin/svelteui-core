// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../node_modules/svelte/internal/index.mjs":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvelteElement = exports.SvelteComponentTyped = exports.SvelteComponentDev = exports.SvelteComponent = exports.HtmlTagHydration = exports.HtmlTag = void 0;
exports.action_destroyer = action_destroyer;
exports.add_attribute = add_attribute;
exports.add_classes = add_classes;
exports.add_flush_callback = add_flush_callback;
exports.add_location = add_location;
exports.add_render_callback = add_render_callback;
exports.add_resize_listener = add_resize_listener;
exports.add_styles = add_styles;
exports.add_transform = add_transform;
exports.afterUpdate = afterUpdate;
exports.append = append;
exports.append_dev = append_dev;
exports.append_empty_stylesheet = append_empty_stylesheet;
exports.append_hydration = append_hydration;
exports.append_hydration_dev = append_hydration_dev;
exports.append_styles = append_styles;
exports.assign = assign;
exports.attr = attr;
exports.attr_dev = attr_dev;
exports.attribute_to_object = attribute_to_object;
exports.beforeUpdate = beforeUpdate;
exports.bind = bind;
exports.binding_callbacks = void 0;
exports.blank_object = blank_object;
exports.bubble = bubble;
exports.check_outros = check_outros;
exports.children = children;
exports.claim_component = claim_component;
exports.claim_element = claim_element;
exports.claim_html_tag = claim_html_tag;
exports.claim_space = claim_space;
exports.claim_svg_element = claim_svg_element;
exports.claim_text = claim_text;
exports.clear_loops = clear_loops;
exports.component_subscribe = component_subscribe;
exports.compute_rest_props = compute_rest_props;
exports.compute_slots = compute_slots;
exports.createEventDispatcher = createEventDispatcher;
exports.create_animation = create_animation;
exports.create_bidirectional_transition = create_bidirectional_transition;
exports.create_component = create_component;
exports.create_in_transition = create_in_transition;
exports.create_out_transition = create_out_transition;
exports.create_slot = create_slot;
exports.create_ssr_component = create_ssr_component;
exports.current_component = void 0;
exports.custom_event = custom_event;
exports.dataset_dev = dataset_dev;
exports.debug = debug;
exports.destroy_block = destroy_block;
exports.destroy_component = destroy_component;
exports.destroy_each = destroy_each;
exports.detach = detach;
exports.detach_after_dev = detach_after_dev;
exports.detach_before_dev = detach_before_dev;
exports.detach_between_dev = detach_between_dev;
exports.detach_dev = detach_dev;
exports.dirty_components = void 0;
exports.dispatch_dev = dispatch_dev;
exports.each = each;
exports.element = element;
exports.element_is = element_is;
exports.empty = empty;
exports.end_hydrating = end_hydrating;
exports.escape = escape;
exports.escape_attribute_value = escape_attribute_value;
exports.escape_object = escape_object;
exports.escaped = void 0;
exports.exclude_internal_props = exclude_internal_props;
exports.fix_and_destroy_block = fix_and_destroy_block;
exports.fix_and_outro_and_destroy_block = fix_and_outro_and_destroy_block;
exports.fix_position = fix_position;
exports.flush = flush;
exports.getAllContexts = getAllContexts;
exports.getContext = getContext;
exports.get_all_dirty_from_scope = get_all_dirty_from_scope;
exports.get_binding_group_value = get_binding_group_value;
exports.get_current_component = get_current_component;
exports.get_custom_elements_slots = get_custom_elements_slots;
exports.get_root_for_style = get_root_for_style;
exports.get_slot_changes = get_slot_changes;
exports.get_spread_object = get_spread_object;
exports.get_spread_update = get_spread_update;
exports.get_store_value = get_store_value;
exports.globals = void 0;
exports.group_outros = group_outros;
exports.handle_promise = handle_promise;
exports.hasContext = hasContext;
exports.identity = exports.has_prop = void 0;
exports.init = init;
exports.insert = insert;
exports.insert_dev = insert_dev;
exports.insert_hydration = insert_hydration;
exports.insert_hydration_dev = insert_hydration_dev;
exports.is_client = exports.invalid_attribute_name_character = exports.intros = void 0;
exports.is_crossorigin = is_crossorigin;
exports.is_empty = is_empty;
exports.is_function = is_function;
exports.is_promise = is_promise;
exports.listen = listen;
exports.listen_dev = listen_dev;
exports.loop = loop;
exports.loop_guard = loop_guard;
exports.merge_ssr_styles = merge_ssr_styles;
exports.missing_component = void 0;
exports.mount_component = mount_component;
exports.noop = noop;
exports.not_equal = not_equal;
exports.now = void 0;
exports.null_to_empty = null_to_empty;
exports.object_without_properties = object_without_properties;
exports.onDestroy = onDestroy;
exports.onMount = onMount;
exports.once = once;
exports.outro_and_destroy_block = outro_and_destroy_block;
exports.prevent_default = prevent_default;
exports.prop_dev = prop_dev;
exports.query_selector_all = query_selector_all;
exports.raf = void 0;
exports.run = run;
exports.run_all = run_all;
exports.safe_not_equal = safe_not_equal;
exports.schedule_update = schedule_update;
exports.select_multiple_value = select_multiple_value;
exports.select_option = select_option;
exports.select_options = select_options;
exports.select_value = select_value;
exports.self = self;
exports.setContext = setContext;
exports.set_attributes = set_attributes;
exports.set_current_component = set_current_component;
exports.set_custom_element_data = set_custom_element_data;
exports.set_data = set_data;
exports.set_data_dev = set_data_dev;
exports.set_input_type = set_input_type;
exports.set_input_value = set_input_value;
exports.set_now = set_now;
exports.set_raf = set_raf;
exports.set_store_value = set_store_value;
exports.set_style = set_style;
exports.set_svg_attributes = set_svg_attributes;
exports.space = space;
exports.spread = spread;
exports.src_url_equal = src_url_equal;
exports.start_hydrating = start_hydrating;
exports.stop_propagation = stop_propagation;
exports.subscribe = subscribe;
exports.svg_element = svg_element;
exports.text = text;
exports.tick = tick;
exports.time_ranges_to_array = time_ranges_to_array;
exports.to_number = to_number;
exports.toggle_class = toggle_class;
exports.transition_in = transition_in;
exports.transition_out = transition_out;
exports.trusted = trusted;
exports.update_await_block_branch = update_await_block_branch;
exports.update_keyed_each = update_keyed_each;
exports.update_slot = update_slot;
exports.update_slot_base = update_slot_base;
exports.validate_component = validate_component;
exports.validate_each_argument = validate_each_argument;
exports.validate_each_keys = validate_each_keys;
exports.validate_slots = validate_slots;
exports.validate_store = validate_store;
exports.xlink_attr = xlink_attr;

function noop() {}

const identity = x => x;

exports.identity = identity;

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function is_promise(value) {
  return value && typeof value === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file,
      line,
      column,
      char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

let src_url_equal_anchor;

function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement('a');
  }

  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== 'function') {
    throw new Error(`'${name}' is not a store with a 'subscribe' method`);
  }
}

function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }

  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function get_store_value(store) {
  let value;
  subscribe(store, _ => value = _)();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (typeof lets === 'object') {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);

      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}

function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
  update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
}

function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    const dirty = [];
    const length = $$scope.ctx.length / 32;

    for (let i = 0; i < length; i++) {
      dirty[i] = -1;
    }

    return dirty;
  }

  return -1;
}

function exclude_internal_props(props) {
  const result = {};

  for (const k in props) if (k[0] !== '$') result[k] = props[k];

  return result;
}

function compute_rest_props(props, keys) {
  const rest = {};
  keys = new Set(keys);

  for (const k in props) if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];

  return rest;
}

function compute_slots(slots) {
  const result = {};

  for (const key in slots) {
    result[key] = true;
  }

  return result;
}

function once(fn) {
  let ran = false;
  return function (...args) {
    if (ran) return;
    ran = true;
    fn.call(this, ...args);
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}

const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

exports.has_prop = has_prop;

function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
exports.is_client = is_client;
let now = is_client ? () => window.performance.now() : () => Date.now();
exports.now = now;
let raf = is_client ? cb => requestAnimationFrame(cb) : noop; // used internally for testing

exports.raf = raf;

function set_now(fn) {
  exports.now = now = fn;
}

function set_raf(fn) {
  exports.raf = raf = fn;
}

const tasks = new Set();

function run_tasks(now) {
  tasks.forEach(task => {
    if (!task.c(now)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */


function clear_loops() {
  tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(fulfill => {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),

    abort() {
      tasks.delete(task);
    }

  };
} // Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.


let is_hydrating = false;

function start_hydrating() {
  is_hydrating = true;
}

function end_hydrating() {
  is_hydrating = false;
}

function upper_bound(low, high, key, value) {
  // Return first index of value larger than input value in the range [low, high)
  while (low < high) {
    const mid = low + (high - low >> 1);

    if (key(mid) <= value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

function init_hydrate(target) {
  if (target.hydrate_init) return;
  target.hydrate_init = true; // We know that all children have claim_order values since the unclaimed have been detached if target is not <head>

  let children = target.childNodes; // If target is <head>, there may be children without claim_order

  if (target.nodeName === 'HEAD') {
    const myChildren = [];

    for (let i = 0; i < children.length; i++) {
      const node = children[i];

      if (node.claim_order !== undefined) {
        myChildren.push(node);
      }
    }

    children = myChildren;
  }
  /*
  * Reorder claimed children optimally.
  * We can reorder claimed children optimally by finding the longest subsequence of
  * nodes that are already claimed in order and only moving the rest. The longest
  * subsequence subsequence of nodes that are claimed in order can be found by
  * computing the longest increasing subsequence of .claim_order values.
  *
  * This algorithm is optimal in generating the least amount of reorder operations
  * possible.
  *
  * Proof:
  * We know that, given a set of reordering operations, the nodes that do not move
  * always form an increasing subsequence, since they do not move among each other
  * meaning that they must be already ordered among each other. Thus, the maximal
  * set of nodes that do not move form a longest increasing subsequence.
  */
  // Compute longest increasing subsequence
  // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j


  const m = new Int32Array(children.length + 1); // Predecessor indices + 1

  const p = new Int32Array(children.length);
  m[0] = -1;
  let longest = 0;

  for (let i = 0; i < children.length; i++) {
    const current = children[i].claim_order; // Find the largest subsequence length such that it ends in a value less than our current value
    // upper_bound returns first greater value, so we subtract one
    // with fast path for when we are on the current longest subsequence

    const seqLen = (longest > 0 && children[m[longest]].claim_order <= current ? longest + 1 : upper_bound(1, longest, idx => children[m[idx]].claim_order, current)) - 1;
    p[i] = m[seqLen] + 1;
    const newLen = seqLen + 1; // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.

    m[newLen] = i;
    longest = Math.max(newLen, longest);
  } // The longest increasing subsequence of nodes (initially reversed)


  const lis = []; // The rest of the nodes, nodes that will be moved

  const toMove = [];
  let last = children.length - 1;

  for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
    lis.push(children[cur - 1]);

    for (; last >= cur; last--) {
      toMove.push(children[last]);
    }

    last--;
  }

  for (; last >= 0; last--) {
    toMove.push(children[last]);
  }

  lis.reverse(); // We sort the nodes being moved to guarantee that their insertion order matches the claim order

  toMove.sort((a, b) => a.claim_order - b.claim_order); // Finally, we move the nodes

  for (let i = 0, j = 0; i < toMove.length; i++) {
    while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
      j++;
    }

    const anchor = j < lis.length ? lis[j] : null;
    target.insertBefore(toMove[i], anchor);
  }
}

function append(target, node) {
  target.appendChild(node);
}

function append_styles(target, style_sheet_id, styles) {
  const append_styles_to = get_root_for_style(target);

  if (!append_styles_to.getElementById(style_sheet_id)) {
    const style = element('style');
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}

function get_root_for_style(node) {
  if (!node) return document;
  const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;

  if (root && root.host) {
    return root;
  }

  return node.ownerDocument;
}

function append_empty_stylesheet(node) {
  const style_element = element('style');
  append_stylesheet(get_root_for_style(node), style_element);
  return style_element.sheet;
}

function append_stylesheet(node, style) {
  append(node.head || node, style);
}

function append_hydration(target, node) {
  if (is_hydrating) {
    init_hydrate(target);

    if (target.actual_end_child === undefined || target.actual_end_child !== null && target.actual_end_child.parentElement !== target) {
      target.actual_end_child = target.firstChild;
    } // Skip nodes of undefined ordering


    while (target.actual_end_child !== null && target.actual_end_child.claim_order === undefined) {
      target.actual_end_child = target.actual_end_child.nextSibling;
    }

    if (node !== target.actual_end_child) {
      // We only insert if the ordering of this node should be modified or the parent node is not target
      if (node.claim_order !== undefined || node.parentNode !== target) {
        target.insertBefore(node, target.actual_end_child);
      }
    } else {
      target.actual_end_child = node.nextSibling;
    }
  } else if (node.parentNode !== target || node.nextSibling !== null) {
    target.appendChild(node);
  }
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function insert_hydration(target, node, anchor) {
  if (is_hydrating && !anchor) {
    append_hydration(target, node);
  } else if (node.parentNode !== target || node.nextSibling != anchor) {
    target.insertBefore(node, anchor || null);
  }
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is
  });
}

function object_without_properties(obj, exclude) {
  const target = {};

  for (const k in obj) {
    if (has_prop(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function trusted(fn) {
  return function (event) {
    // @ts-ignore
    if (event.isTrusted) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value') {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (const key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group, __value, checked) {
  const value = new Set();

  for (let i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.add(group[i].__value);
  }

  if (!checked) {
    value.delete(__value);
  }

  return Array.from(value);
}

function to_number(value) {
  return value === '' ? null : +value;
}

function time_ranges_to_array(ranges) {
  const array = [];

  for (let i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function init_claim_info(nodes) {
  if (nodes.claim_info === undefined) {
    nodes.claim_info = {
      last_index: 0,
      total_claimed: 0
    };
  }
}

function claim_node(nodes, predicate, processNode, createNode, dontUpdateLastIndex = false) {
  // Try to find nodes in an order such that we lengthen the longest increasing subsequence
  init_claim_info(nodes);

  const resultNode = (() => {
    // We first try to find an element after the previous one
    for (let i = nodes.claim_info.last_index; i < nodes.length; i++) {
      const node = nodes[i];

      if (predicate(node)) {
        const replacement = processNode(node);

        if (replacement === undefined) {
          nodes.splice(i, 1);
        } else {
          nodes[i] = replacement;
        }

        if (!dontUpdateLastIndex) {
          nodes.claim_info.last_index = i;
        }

        return node;
      }
    } // Otherwise, we try to find one before
    // We iterate in reverse so that we don't go too far back


    for (let i = nodes.claim_info.last_index - 1; i >= 0; i--) {
      const node = nodes[i];

      if (predicate(node)) {
        const replacement = processNode(node);

        if (replacement === undefined) {
          nodes.splice(i, 1);
        } else {
          nodes[i] = replacement;
        }

        if (!dontUpdateLastIndex) {
          nodes.claim_info.last_index = i;
        } else if (replacement === undefined) {
          // Since we spliced before the last_index, we decrease it
          nodes.claim_info.last_index--;
        }

        return node;
      }
    } // If we can't find any matching node, we create a new one


    return createNode();
  })();

  resultNode.claim_order = nodes.claim_info.total_claimed;
  nodes.claim_info.total_claimed += 1;
  return resultNode;
}

function claim_element_base(nodes, name, attributes, create_element) {
  return claim_node(nodes, node => node.nodeName === name, node => {
    const remove = [];

    for (let j = 0; j < node.attributes.length; j++) {
      const attribute = node.attributes[j];

      if (!attributes[attribute.name]) {
        remove.push(attribute.name);
      }
    }

    remove.forEach(v => node.removeAttribute(v));
    return undefined;
  }, () => create_element(name));
}

function claim_element(nodes, name, attributes) {
  return claim_element_base(nodes, name, attributes, element);
}

function claim_svg_element(nodes, name, attributes) {
  return claim_element_base(nodes, name, attributes, svg_element);
}

function claim_text(nodes, data) {
  return claim_node(nodes, node => node.nodeType === 3, node => {
    const dataStr = '' + data;

    if (node.data.startsWith(dataStr)) {
      if (node.data.length !== dataStr.length) {
        return node.splitText(dataStr.length);
      }
    } else {
      node.data = dataStr;
    }
  }, () => text(data), true // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
  );
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function find_comment(nodes, text, start) {
  for (let i = start; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.nodeType === 8
    /* comment node */
    && node.textContent.trim() === text) {
      return i;
    }
  }

  return nodes.length;
}

function claim_html_tag(nodes) {
  // find html opening tag
  const start_index = find_comment(nodes, 'HTML_TAG_START', 0);
  const end_index = find_comment(nodes, 'HTML_TAG_END', start_index);

  if (start_index === end_index) {
    return new HtmlTagHydration();
  }

  init_claim_info(nodes);
  const html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
  detach(html_tag_nodes[0]);
  detach(html_tag_nodes[html_tag_nodes.length - 1]);
  const claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);

  for (const n of claimed_nodes) {
    n.claim_order = nodes.claim_info.total_claimed;
    nodes.claim_info.total_claimed += 1;
  }

  return new HtmlTagHydration(claimed_nodes);
}

function set_data(text, data) {
  data = '' + data;
  if (text.wholeText !== data) text.data = data;
}

function set_input_value(input, value) {
  input.value = value == null ? '' : value;
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  if (value === null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? 'important' : '');
  }
}

function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }

  select.selectedIndex = -1; // no option should be selected
}

function select_options(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  const selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
} // unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead


let crossorigin;

function is_crossorigin() {
  if (crossorigin === undefined) {
    crossorigin = false;

    try {
      if (typeof window !== 'undefined' && window.parent) {
        void window.parent.document;
      }
    } catch (error) {
      crossorigin = true;
    }
  }

  return crossorigin;
}

function add_resize_listener(node, fn) {
  const computed_style = getComputedStyle(node);

  if (computed_style.position === 'static') {
    node.style.position = 'relative';
  }

  const iframe = element('iframe');
  iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' + 'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.tabIndex = -1;
  const crossorigin = is_crossorigin();
  let unsubscribe;

  if (crossorigin) {
    iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
    unsubscribe = listen(window, 'message', event => {
      if (event.source === iframe.contentWindow) fn();
    });
  } else {
    iframe.src = 'about:blank';

    iframe.onload = () => {
      unsubscribe = listen(iframe.contentWindow, 'resize', fn);
    };
  }

  append(node, iframe);
  return () => {
    if (crossorigin) {
      unsubscribe();
    } else if (unsubscribe && iframe.contentWindow) {
      unsubscribe();
    }

    detach(iframe);
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail, bubbles = false) {
  const e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, bubbles, false, detail);
  return e;
}

function query_selector_all(selector, parent = document.body) {
  return Array.from(parent.querySelectorAll(selector));
}

class HtmlTag {
  constructor() {
    this.e = this.n = null;
  }

  c(html) {
    this.h(html);
  }

  m(html, target, anchor = null) {
    if (!this.e) {
      this.e = element(target.nodeName);
      this.t = target;
      this.c(html);
    }

    this.i(anchor);
  }

  h(html) {
    this.e.innerHTML = html;
    this.n = Array.from(this.e.childNodes);
  }

  i(anchor) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert(this.t, this.n[i], anchor);
    }
  }

  p(html) {
    this.d();
    this.h(html);
    this.i(this.a);
  }

  d() {
    this.n.forEach(detach);
  }

}

exports.HtmlTag = HtmlTag;

class HtmlTagHydration extends HtmlTag {
  constructor(claimed_nodes) {
    super();
    this.e = this.n = null;
    this.l = claimed_nodes;
  }

  c(html) {
    if (this.l) {
      this.n = this.l;
    } else {
      super.c(html);
    }
  }

  i(anchor) {
    for (let i = 0; i < this.n.length; i += 1) {
      insert_hydration(this.t, this.n[i], anchor);
    }
  }

}

exports.HtmlTagHydration = HtmlTagHydration;

function attribute_to_object(attributes) {
  const result = {};

  for (const attribute of attributes) {
    result[attribute.name] = attribute.value;
  }

  return result;
}

function get_custom_elements_slots(element) {
  const result = {};
  element.childNodes.forEach(node => {
    result[node.slot || 'default'] = true;
  });
  return result;
} // we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624


const managed_styles = new Map();
let active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i--) hash = (hash << 5) - hash ^ str.charCodeAt(i);

  return hash >>> 0;
}

function create_style_information(doc, node) {
  const info = {
    stylesheet: append_empty_stylesheet(node),
    rules: {}
  };
  managed_styles.set(doc, info);
  return info;
}

function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = '{\n';

  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
  }

  const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = get_root_for_style(node);
  const {
    stylesheet,
    rules
  } = managed_styles.get(doc) || create_style_information(doc, node);

  if (!rules[name]) {
    rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }

  const animation = node.style.animation || '';
  node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}

function delete_rule(node, name) {
  const previous = (node.style.animation || '').split(', ');
  const next = previous.filter(name ? anim => anim.indexOf(name) < 0 // remove specific animation
  : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
  );
  const deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(() => {
    if (active) return;
    managed_styles.forEach(info => {
      const {
        stylesheet
      } = info;
      let i = stylesheet.cssRules.length;

      while (i--) stylesheet.deleteRule(i);

      info.rules = {};
    });
    managed_styles.clear();
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  const to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
  const {
    delay = 0,
    duration = 300,
    easing = identity,
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay,
    // @ts-ignore todo:
    end = start_time + duration,
    tick = noop,
    css
  } = fn(node, {
    from,
    to
  }, params);
  let running = true;
  let started = false;
  let name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(now => {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      const p = now - start_time;
      const t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  const style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    const {
      width,
      height
    } = style;
    const a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  const b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
  }
}

let current_component;
exports.current_component = current_component;

function set_current_component(component) {
  exports.current_component = current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error('Function called outside component initialization');
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      const event = custom_event(type, detail);
      callbacks.slice().forEach(fn => {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
}

function getAllContexts() {
  return get_current_component().$$.context;
}

function hasContext(key) {
  return get_current_component().$$.context.has(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    // @ts-ignore
    callbacks.slice().forEach(fn => fn.call(this, event));
  }
}

const dirty_components = [];
exports.dirty_components = dirty_components;
const intros = {
  enabled: false
};
exports.intros = intros;
const binding_callbacks = [];
exports.binding_callbacks = binding_callbacks;
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
} // flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.


const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function

function flush() {
  const saved_component = current_component;

  do {
    // first, call beforeUpdate functions
    // and update components
    while (flushidx < dirty_components.length) {
      const component = dirty_components[flushidx];
      flushidx++;
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

let promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

const null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  let config = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, 'start'));
    task = loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  let started = false;
  return {
    start() {
      if (started) return;
      started = true;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },

    invalidate() {
      started = false;
    },

    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }

  };
}

function create_out_transition(node, fn, params) {
  let config = fn(node, params);
  let running = true;
  let animation_name;
  const group = outros;
  group.r += 1;

  function go() {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    add_render_callback(() => dispatch(node, false, 'start'));
    loop(now => {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          const t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(() => {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }

  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  let config = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    const {
      delay = 0,
      duration = 300,
      easing = identity,
      tick = noop,
      css
    } = config || null_transition;
    const program = {
      start: now() + delay,
      b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program || pending_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(() => dispatch(node, b, 'start'));
      loop(now => {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro ??? we can tidy up immediately
                clear_animation();
              } else {
                // outro ??? needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            const p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run(b) {
      if (is_function(config)) {
        wait().then(() => {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },

    end() {
      clear_animation();
      running_program = pending_program = null;
    }

  };
}

function handle_promise(promise, info) {
  const token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    let child_ctx = info.ctx;

    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }

    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block, i) => {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, () => {
              if (info.blocks[i] === block) {
                info.blocks[i] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;

    if (needs_flush) {
      flush();
    }
  }

  if (is_promise(promise)) {
    const current_component = get_current_component();
    promise.then(value => {
      set_current_component(current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, error => {
      set_current_component(current_component);
      update(info.catch, 2, info.error, error);
      set_current_component(null);

      if (!info.hasCatch) {
        throw error;
      }
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = promise;
  }
}

function update_await_block_branch(info, ctx, dirty) {
  const child_ctx = ctx.slice();
  const {
    resolved
  } = info;

  if (info.current === info.then) {
    child_ctx[info.value] = resolved;
  }

  if (info.current === info.catch) {
    child_ctx[info.error] = resolved;
  }

  info.block.p(child_ctx, dirty);
}

const globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;
exports.globals = globals;

function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};

  while (i--) old_indexes[old_blocks[i].key] = i;

  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;

  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  const will_move = new Set();
  const did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }

  while (n) insert(new_blocks[n - 1]);

  return new_blocks;
}

function validate_each_keys(ctx, list, get_context, get_key) {
  const keys = new Set();

  for (let i = 0; i < list.length; i++) {
    const key = get_key(get_context(ctx, list, i));

    if (keys.has(key)) {
      throw new Error('Cannot have duplicate keys in a keyed each');
    }

    keys.add(key);
  }
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html


const boolean_attributes = new Set(['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected']);
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

exports.invalid_attribute_name_character = invalid_attribute_name_character;

function spread(args, attrs_to_add) {
  const attributes = Object.assign({}, ...args);

  if (attrs_to_add) {
    const classes_to_add = attrs_to_add.classes;
    const styles_to_add = attrs_to_add.styles;

    if (classes_to_add) {
      if (attributes.class == null) {
        attributes.class = classes_to_add;
      } else {
        attributes.class += ' ' + classes_to_add;
      }
    }

    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
      }
    }
  }

  let str = '';
  Object.keys(attributes).forEach(name => {
    if (invalid_attribute_name_character.test(name)) return;
    const value = attributes[name];
    if (value === true) str += ' ' + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += ' ' + name;
    } else if (value != null) {
      str += ` ${name}="${value}"`;
    }
  });
  return str;
}

function merge_ssr_styles(style_attribute, style_directive) {
  const style_object = {};

  for (const individual_style of style_attribute.split(';')) {
    const colon_index = individual_style.indexOf(':');
    const name = individual_style.slice(0, colon_index).trim();
    const value = individual_style.slice(colon_index + 1).trim();
    if (!name) continue;
    style_object[name] = value;
  }

  for (const name in style_directive) {
    const value = style_directive[name];

    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }

  return style_object;
}

const escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
exports.escaped = escaped;

function escape(html) {
  return String(html).replace(/["'&<>]/g, match => escaped[match]);
}

function escape_attribute_value(value) {
  return typeof value === 'string' ? escape(value) : value;
}

function escape_object(obj) {
  const result = {};

  for (const key in obj) {
    result[key] = escape_attribute_value(obj[key]);
  }

  return result;
}

function each(items, fn) {
  let str = '';

  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

const missing_component = {
  $$render: () => ''
};
exports.missing_component = missing_component;

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }

  return component;
}

function debug(file, line, column, values) {
  console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

let on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$
    });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: (props = {}, {
      $$slots = {},
      context = new Map()
    } = {}) => {
      on_destroy = [];
      const result = {
        title: '',
        head: '',
        css: new Set()
      };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map(css => css.code).join('\n'),
          map: null // TODO

        },
        head: result.title + result.head
      };
    },
    $$render
  };
}

function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value) return '';
  return ` ${name}${value === true && boolean_attributes.has(name) ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

function add_classes(classes) {
  return classes ? ` class="${classes}"` : '';
}

function style_object_to_string(style_object) {
  return Object.keys(style_object).filter(key => style_object[key]).map(key => `${key}: ${style_object[key]};`).join(' ');
}

function add_styles(style_object) {
  const styles = style_object_to_string(style_object);
  return styles ? ` style="${styles}"` : '';
}

function bind(component, name, callback) {
  const index = component.$$.props[name];

  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor, customElement) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor);

  if (!customElement) {
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
  }

  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance ? instance(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }

  set_current_component(parent_component);
}

let SvelteElement;
exports.SvelteElement = SvelteElement;

if (typeof HTMLElement === 'function') {
  exports.SvelteElement = SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: 'open'
      });
    }

    connectedCallback() {
      const {
        on_mount
      } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function); // @ts-ignore todo: improve typings

      for (const key in this.$$.slotted) {
        // @ts-ignore todo: improve typings
        this.appendChild(this.$$.slotted[key]);
      }
    }

    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }

    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }

    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }

    $on(type, callback) {
      // TODO should this delegate to addEventListener?
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }

    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }

  };
}
/**
 * Base class for Svelte components. Used when dev=false.
 */


class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }

}

exports.SvelteComponent = SvelteComponent;

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.46.3'
  }, detail), true));
}

function append_dev(target, node) {
  dispatch_dev('SvelteDOMInsert', {
    target,
    node
  });
  append(target, node);
}

function append_hydration_dev(target, node) {
  dispatch_dev('SvelteDOMInsert', {
    target,
    node
  });
  append_hydration(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev('SvelteDOMInsert', {
    target,
    node,
    anchor
  });
  insert(target, node, anchor);
}

function insert_hydration_dev(target, node, anchor) {
  dispatch_dev('SvelteDOMInsert', {
    target,
    node,
    anchor
  });
  insert_hydration(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev('SvelteDOMRemove', {
    node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev('SvelteDOMAddEventListener', {
    node,
    event,
    handler,
    modifiers
  });
  const dispose = listen(node, event, handler, options);
  return () => {
    dispatch_dev('SvelteDOMRemoveEventListener', {
      node,
      event,
      handler,
      modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', {
    node,
    attribute
  });else dispatch_dev('SvelteDOMSetAttribute', {
    node,
    attribute,
    value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev('SvelteDOMSetProperty', {
    node,
    property,
    value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev('SvelteDOMSetDataset', {
    node,
    property,
    value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.wholeText === data) return;
  dispatch_dev('SvelteDOMSetData', {
    node: text,
    data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
    let msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (const slot_key of Object.keys(slot)) {
    if (!~keys.indexOf(slot_key)) {
      console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
    }
  }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */


class SvelteComponentDev extends SvelteComponent {
  constructor(options) {
    if (!options || !options.target && !options.$$inline) {
      throw new Error("'target' is a required option");
    }

    super();
  }

  $destroy() {
    super.$destroy();

    this.$destroy = () => {
      console.warn('Component was already destroyed'); // eslint-disable-line no-console
    };
  }

  $capture_state() {}

  $inject_state() {}

}
/**
 * Base class to create strongly typed Svelte components.
 * This only exists for typing purposes and should be used in `.d.ts` files.
 *
 * ### Example:
 *
 * You have component library on npm called `component-library`, from which
 * you export a component called `MyComponent`. For Svelte+TypeScript users,
 * you want to provide typings. Therefore you create a `index.d.ts`:
 * ```ts
 * import { SvelteComponentTyped } from "svelte";
 * export class MyComponent extends SvelteComponentTyped<{foo: string}> {}
 * ```
 * Typing this makes it possible for IDEs like VS Code with the Svelte extension
 * to provide intellisense and to use the component like this in a Svelte file
 * with TypeScript:
 * ```svelte
 * <script lang="ts">
 * 	import { MyComponent } from "component-library";
 * </script>
 * <MyComponent foo={'bar'} />
 * ```
 *
 * #### Why not make this part of `SvelteComponent(Dev)`?
 * Because
 * ```ts
 * class ASubclassOfSvelteComponent extends SvelteComponent<{foo: string}> {}
 * const component: typeof SvelteComponent = ASubclassOfSvelteComponent;
 * ```
 * will throw a type error, so we need to separate the more strictly typed class.
 */


exports.SvelteComponentDev = SvelteComponentDev;

class SvelteComponentTyped extends SvelteComponentDev {
  constructor(options) {
    super(options);
  }

}

exports.SvelteComponentTyped = SvelteComponentTyped;

function loop_guard(timeout) {
  const start = Date.now();
  return () => {
    if (Date.now() - start > timeout) {
      throw new Error('Infinite loop detected');
    }
  };
}
},{}],"../../../node_modules/@bojalelabs/headless-svelte-ui/src/Button/Button.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

/* ../../../node_modules/@bojalelabs/headless-svelte-ui/src/Button/Button.svelte generated by Svelte v3.46.3 */
const file = "../../../node_modules/@bojalelabs/headless-svelte-ui/src/Button/Button.svelte";

function create_fragment(ctx) {
  let button;
  let t;
  let current;
  let mounted;
  let dispose;
  const default_slot_template =
  /*#slots*/
  ctx[3].default;
  const default_slot = (0, _internal.create_slot)(default_slot_template, ctx,
  /*$$scope*/
  ctx[2], null);
  const block = {
    c: function create() {
      button = (0, _internal.element)("button");
      if (default_slot) default_slot.c();
      t = (0, _internal.text)(" Lable Here");
      (0, _internal.add_location)(button, file, 7, 0, 124);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, button, anchor);

      if (default_slot) {
        default_slot.m(button, null);
      }

      (0, _internal.append_dev)(button, t);
      current = true;

      if (!mounted) {
        dispose = (0, _internal.listen_dev)(button, "click",
        /*handleClick*/
        ctx[0], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty &
        /*$$scope*/
        4)) {
          (0, _internal.update_slot_base)(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[2], !current ? (0, _internal.get_all_dirty_from_scope)(
          /*$$scope*/
          ctx[2]) : (0, _internal.get_slot_changes)(default_slot_template,
          /*$$scope*/
          ctx[2], dirty, null), null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(button);
      if (default_slot) default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  let {
    $$slots: slots = {},
    $$scope
  } = $$props;
  (0, _internal.validate_slots)('Button', slots, ['default']);
  let {
    buttonText = "Button"
  } = $$props;

  function handleClick() {
    $$invalidate(1, buttonText += " Clicked");
  }

  const writable_props = ['buttonText'];
  Object.keys($$props).forEach(key => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Button> was created with unknown prop '${key}'`);
  });

  $$self.$$set = $$props => {
    if ('buttonText' in $$props) $$invalidate(1, buttonText = $$props.buttonText);
    if ('$$scope' in $$props) $$invalidate(2, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = () => ({
    buttonText,
    handleClick
  });

  $$self.$inject_state = $$props => {
    if ('buttonText' in $$props) $$invalidate(1, buttonText = $$props.buttonText);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [handleClick, buttonText, $$scope, slots];
}

class Button extends _internal.SvelteComponentDev {
  constructor(options) {
    super(options);
    (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {
      buttonText: 1
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: this,
      tagName: "Button",
      options,
      id: create_fragment.name
    });
  }

  get buttonText() {
    throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

  set buttonText(value) {
    throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }

}

var _default = Button;
exports.default = _default;
},{"svelte/internal":"../../../node_modules/svelte/internal/index.mjs"}],"../../../node_modules/@bojalelabs/headless-svelte-ui/src/Button/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Button.default;
  }
});

var _Button = _interopRequireDefault(require("./Button.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Button.svelte":"../../../node_modules/@bojalelabs/headless-svelte-ui/src/Button/Button.svelte"}],"../../../node_modules/@bojalelabs/headless-svelte-ui/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _Button.default;
  }
});

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Button":"../../../node_modules/@bojalelabs/headless-svelte-ui/src/Button/index.js"}],"../../../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"App.svelte":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _internal = require("svelte/internal");

var _headlessSvelteUi = require("@bojalelabs/headless-svelte-ui");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var file = "App.svelte"; // (13:0) <Button>

function create_default_slot(ctx) {
  var t;
  var block = {
    c: function create() {
      t = (0, _internal.text)("Playground Button");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(t);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(13:0) <Button>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var h1;
  var t0;
  var t1;
  var t2;
  var t3;
  var button;
  var current;
  button = new _headlessSvelteUi.Button({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      h1 = (0, _internal.element)("h1");
      t0 = (0, _internal.text)("Hello ");
      t1 = (0, _internal.text)(
      /*name*/
      ctx[0]);
      t2 = (0, _internal.text)("!");
      t3 = (0, _internal.space)();
      (0, _internal.create_component)(button.$$.fragment);
      (0, _internal.attr_dev)(h1, "class", "svelte-1wdv9cp");
      (0, _internal.add_location)(h1, file, 11, 0, 161);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      (0, _internal.insert_dev)(target, h1, anchor);
      (0, _internal.append_dev)(h1, t0);
      (0, _internal.append_dev)(h1, t1);
      (0, _internal.append_dev)(h1, t2);
      (0, _internal.insert_dev)(target, t3, anchor);
      (0, _internal.mount_component)(button, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*name*/
      1) (0, _internal.set_data_dev)(t1,
      /*name*/
      ctx[0]);
      var button_changes = {};

      if (dirty &
      /*$$scope*/
      2) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);
    },
    i: function intro(local) {
      if (current) return;
      (0, _internal.transition_in)(button.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      (0, _internal.transition_out)(button.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) (0, _internal.detach_dev)(h1);
      if (detaching) (0, _internal.detach_dev)(t3);
      (0, _internal.destroy_component)(button, detaching);
    }
  };
  (0, _internal.dispatch_dev)("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  (0, _internal.validate_slots)('App', slots, []);
  var name = $$props.name;
  var writable_props = ['name'];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn("<App> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ('name' in $$props) $$invalidate(0, name = $$props.name);
  };

  $$self.$capture_state = function () {
    return {
      name: name,
      Button: _headlessSvelteUi.Button
    };
  };

  $$self.$inject_state = function ($$props) {
    if ('name' in $$props) $$invalidate(0, name = $$props.name);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [name];
}

var App = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(App, _SvelteComponentDev);

  var _super = _createSuper(App);

  function App(options) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, options);
    (0, _internal.init)(_assertThisInitialized(_this), options, instance, create_fragment, _internal.safe_not_equal, {
      name: 0
    });
    (0, _internal.dispatch_dev)("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "App",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*name*/
    ctx[0] === undefined && !('name' in props)) {
      console.warn("<App> was created without expected prop 'name'");
    }

    return _this;
  }

  _createClass(App, [{
    key: "name",
    get: function get() {
      throw new Error("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return App;
}(_internal.SvelteComponentDev);

var _default = App;
exports.default = _default;
},{"svelte/internal":"../../../node_modules/svelte/internal/index.mjs","@bojalelabs/headless-svelte-ui":"../../../node_modules/@bojalelabs/headless-svelte-ui/src/index.js","_css_loader":"../../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _App = _interopRequireDefault(require("./App.svelte"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _App.default({
  target: document.body,
  props: {
    name: 'Svelte'
  }
});
var _default = app;
exports.default = _default;
},{"./App.svelte":"App.svelte"}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54315" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map