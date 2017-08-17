/**
 * Created by Douglas on 8/17/2017.
 */

export const itemByKey = key => localStorage.getItem(key);

export const save = async (key, value) => await localStorage.setItem(key, value);

export const remove = async key => await localStorage.removeItem(key);

export const reset = async () => await localStorage.clear();
