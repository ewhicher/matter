<?php

namespace App\Scopes;

use Statamic\Query\Scopes\Scope;

class Handle extends Scope
{
    /**
     * Apply the scope.
     *
     * @param \Statamic\Query\Builder $query
     * @param array $values
     * @return void
     */
    public function apply($query, $values)
    {
        $handle = $values->get('scope_handle', null);
        if (!$handle) return;
        $entries = $query->where('collection', $handle)->get();
        return $entries;
    }
}
