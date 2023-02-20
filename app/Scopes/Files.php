<?php

namespace App\Scopes;

use Statamic\Query\Scopes\Scope;

class Files extends Scope
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
        $type = $values->get('scope_type', null);
        if (!$type) return;

        $handle = $type === 'work' ? ['case_studies', 'projects'] : ['pov'];
        $entries = $query->whereIn('collection', $handle)->get();
        return $entries;
    }
}
