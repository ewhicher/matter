<?php

namespace App\Tags;

use Statamic\Tags\Tags;
use Embed\Embed;

class Viddy extends Tags
{
    /**
     * The {{ viddy }} tag.
     *
     * @return string|array
     */
    public function index()
    {

        $src = $this->params->get('src');
        if (!$src) return;

        $embed = new Embed();
        $video = $embed->get($src);

        $ratio = $video->code->ratio;

        $parts = explode(' ', $video->code->html, 2);
        $string = $parts[0].' loading="lazy" style="position:absolute;top-0;left-0;width:100%;height:100%;" '.$parts[1];

        $html = '<div style="position:relative;height:0;padding-bottom:'.$ratio.'%;">'.$string.'</div>';

        return $html;
    }
}