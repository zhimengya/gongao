import Listeners from './listener/';
import AntPathMatcherBuilder from 'ant-pattern-matcher';

const AntPathMatcher = new AntPathMatcherBuilder().create();

if (!window.hasOwnProperty('jQuery')) {
    throw '不包含jQuery不执行';
}

const url = location.href;

for (const listener of Listeners) {

    for (const e of listener.match) {
        if (AntPathMatcher.isMatch(e, url)) {
            listener.process();
            break;
        }
    }
}

