<?php

namespace App\Tags;

use Statamic\Facades\File;
use Statamic\Tags\Tags;

class Bust extends Tags
{
    /**
     * The {{ bust }} tag.
     *
     * @return string|array
     */

    public function css()
    {
        $src = $this->params->get('src') ? $this->params->get('src') : 'css/main.css';
        $version = File::lastModified('public/'.$src);
        $busted = $src . '?v='.$version;
        return '<link rel="stylesheet" href="/'.$busted .'">';
    }

    public function js()
    {
        $src = $this->params->get('src') ? $this->params->get('src') : 'js/main.js';
        $version = File::lastModified('public/'.$src);
        $busted = $src . '?v='.$version;
        return '<script type="text/javascript" src="/'.$busted.'"></script>';
    }
}
